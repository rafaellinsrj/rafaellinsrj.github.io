// Conferências do site gerado em out/ (especificação V2, seção 12).
import fs from "node:fs";
import path from "node:path";
const root = new URL("../out/", import.meta.url).pathname;
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f === "index.html") pages.push(p); } })(root);
const problems = [];
const emoji = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}]/u;
let images = 0, links = 0;
for (const file of pages) {
  const rel = "/" + path.relative(root, path.dirname(file)) + "/";
  const html = fs.readFileSync(file, "utf8");
  const body = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
  const text = body.replace(/<[^>]+>/g, " ");
  if (emoji.test(text)) problems.push(`${rel}: emoji ou seta Unicode no texto: ${text.match(emoji)[0]}`);
  if (/href="[^"]*(curriculo|currículo|resume|cv)[^"]*\.pdf"/i.test(body) || /Baixar currículo/i.test(text)) problems.push(`${rel}: link ou botão de currículo`);
  if (/grayscale|saturate\(0/.test(html)) problems.push(`${rel}: filtro de dessaturação`);
  for (const m of body.matchAll(/<img\b[^>]*>/g)) {
    images++;
    const tag = m[0];
    const src = (tag.match(/src="([^"]+)"/) || [])[1];
    if (!/\balt="/.test(tag)) problems.push(`${rel}: imagem sem alt (${src})`);
    if (src && src.startsWith("/") && !fs.existsSync(path.join(root, src))) problems.push(`${rel}: imagem inexistente ${src}`);
  }
  for (const m of body.matchAll(/href="(\/[^"#]*)(#[^"]*)?"/g)) {
    links++;
    const target = m[1];
    const p = path.join(root, target);
    const ok = fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, "index.html")));
    if (!ok) problems.push(`${rel}: link interno quebrado ${target}`);
    if (m[2] && m[2] !== "#" ) {
      const id = m[2].slice(1);
      const targetHtml = fs.statSync(p).isDirectory() ? fs.readFileSync(path.join(p, "index.html"), "utf8") : "";
      if (targetHtml && !targetHtml.includes(`id="${id}"`)) problems.push(`${rel}: âncora inexistente ${target}${m[2]}`);
    }
  }
  for (const m of body.matchAll(/href="#([^"]+)"/g)) if (!body.includes(`id="${m[1]}"`)) problems.push(`${rel}: âncora local inexistente #${m[1]}`);
  const h = [...body.matchAll(/<h([1-6])\b/g)].map(x => +x[1]);
  if (h.filter(x => x === 1).length !== 1) problems.push(`${rel}: ${h.filter(x => x === 1).length} títulos h1`);
  for (let i = 1; i < h.length; i++) if (h[i] - h[i - 1] > 1) { problems.push(`${rel}: salto de título h${h[i - 1]} para h${h[i]}`); break; }
  if (!/<html lang="pt-BR"/.test(html)) problems.push(`${rel}: lang ausente`);
}
console.log(`Páginas: ${pages.length} · imagens: ${images} · links internos: ${links}`);
console.log(problems.length ? problems.join("\n") : "Nenhum problema encontrado.");
process.exitCode = problems.length ? 1 : 0;
