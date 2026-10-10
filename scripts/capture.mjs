// Testa rolagem horizontal em 320, 390 e 1280 px em todas as páginas e salva capturas em docs/interno/capturas.
// Usa o Chrome instalado via protocolo DevTools (sem dependências). Requer o site servido em http://127.0.0.1:4310.
import {spawn} from "node:child_process";
import fs from "node:fs";
const base = "http://127.0.0.1:4310";
const outDir = new URL("../docs/interno/capturas/", import.meta.url).pathname;
fs.mkdirSync(outDir, {recursive: true});
const slugs = fs.readdirSync(new URL("../out/projetos/", import.meta.url)).filter(s => !s.includes("."));
const pages = ["/", ...slugs.map(s => `/projetos/${s}/`)];
const shots = new Set(["/", "/projetos/190-policia-militar/", "/projetos/certame/", "/projetos/moneta/", "/projetos/easyspa/", "/projetos/cgm/"]);
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["--headless=new", "--remote-debugging-port=9333", "--user-data-dir=/tmp/claude-qa-chrome", "--hide-scrollbars", "about:blank"], {stdio: "ignore"});
const sleep = ms => new Promise(r => setTimeout(r, ms));
let wsUrl;
for (let i = 0; i < 120 && !wsUrl; i++) { await sleep(250); try { const t = await (await fetch("http://127.0.0.1:9333/json")).json(); wsUrl = t.find(x => x.type === "page")?.webSocketDebuggerUrl; } catch {} }
const ws = new WebSocket(wsUrl); await new Promise(r => ws.onopen = r);
let id = 0; const wait = new Map(); const events = [];
ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && wait.has(d.id)) { wait.get(d.id)(d.result); wait.delete(d.id); } else if (d.method) events.push(d.method); };
const send = (method, params = {}) => new Promise(r => { const i = ++id; wait.set(i, r); ws.send(JSON.stringify({id: i, method, params})); });
await send("Page.enable"); await send("Runtime.enable");
const evalJs = async expr => (await send("Runtime.evaluate", {expression: expr, awaitPromise: true, returnByValue: true})).result.value;
const problems = [];
for (const [w, h, mobile] of [[1280, 800, false], [390, 844, true], [320, 640, true]]) {
  await send("Emulation.setDeviceMetricsOverride", {width: w, height: h, deviceScaleFactor: mobile ? 2 : 1, mobile});
  for (const p of pages) {
    events.length = 0; await send("Page.navigate", {url: base + p});
    for (let i = 0; i < 40 && !events.includes("Page.loadEventFired"); i++) await sleep(100);
    await sleep(300);
    const r = await evalJs(`(async()=>{document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager'); await new Promise(r=>setTimeout(r,400)); const sw=document.documentElement.scrollWidth; const wide=[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).slice(0,3).map(e=>e.tagName+'.'+(e.className||'').toString().split(' ')[0]); return {sw, iw: innerWidth, wide, h: document.documentElement.scrollHeight}})()`);
    if (r.sw > r.iw) problems.push(`${w}px ${p}: rolagem horizontal (${r.sw} > ${r.iw}) ${r.wide.join(", ")}`);
    if (shots.has(p) && w !== 320) {
      const name = (p === "/" ? "inicio" : p.split("/")[2]) + (mobile ? "-celular" : "-desktop") + ".png";
      const clipH = Math.min(r.h, mobile ? 3200 : 2600);
      const shot = await send("Page.captureScreenshot", {format: "png", captureBeyondViewport: true, clip: {x: 0, y: 0, width: w, height: clipH, scale: 1}});
      fs.writeFileSync(outDir + name, Buffer.from(shot.data, "base64"));
    }
  }
}
ws.close(); chrome.kill();
console.log(`Páginas testadas: ${pages.length} × 3 larguras`);
console.log(problems.length ? problems.join("\n") : "Sem rolagem horizontal em 1280, 390 e 320 px.");
