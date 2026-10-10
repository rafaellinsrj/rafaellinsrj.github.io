// Gera lib/cases/index.ts a partir dos arquivos em lib/cases (um estudo de caso por arquivo).
import fs from "node:fs";
const dir = new URL("../lib/cases/", import.meta.url);
const files = fs.readdirSync(dir).filter(f => f.endsWith(".ts") && f !== "index.ts").sort();
const imports = [], names = [];
for (const f of files) {
  const m = fs.readFileSync(new URL(f, dir), "utf8").match(/export const (\w+): CaseStudy/);
  if (!m) continue;
  imports.push(`import {${m[1]}} from "./${f.replace(/\.ts$/, "")}";`);
  names.push(m[1]);
}
const order = `// Gerado por scripts/gen-cases-index.mjs. Não editar à mão.
import type {CaseStudy, Group} from "@/lib/case-types";
${imports.join("\n")}

export const cases: CaseStudy[] = [${names.join(", ")}];
export const caseBySlug = (slug: string) => cases.find(c => c.slug === slug);

// Ordem de apresentação (especificação V2, seção 8): histórico Rio Tech, plataformas complexas, plataformas e fintech, ferramentas, sites.
export const groupOrder: {group: Group; title: string; text: string}[] = [
  {group: "riotech", title: "Histórico Rio Tech", text: "Projetos de 2014 e 2015, com o que foi construído e como eu os arquitetaria hoje."},
  {group: "plataformas", title: "Plataformas", text: "Produtos com arquitetura completa, integrações, operação e qualidade."},
  {group: "fintech", title: "Fintech e simulações", text: "Produtos financeiros, apresentações comerciais e simulações identificadas como tal."},
  {group: "ferramentas", title: "Ferramentas e pesquisa", text: "Aplicações de navegador e trabalho acadêmico em equipe."},
  {group: "sites", title: "Sites profissionais", text: "Engenharia web para profissionais e empresas: desempenho, SEO, acessibilidade e implantação."},
];
const priority = ["190-policia-militar", "easyspa", "certame", "moneta", "hyre", "bioo", "zappop", "lmm", "lins-payments", "lins-up-now", "presto-pdf", "devkit", "fivex"];
export const ordered = (group: Group) => cases.filter(c => c.group === group).sort((a, b) => {
  const ia = priority.indexOf(a.slug), ib = priority.indexOf(b.slug);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.name.localeCompare(b.name, "pt-BR");
});
`;
fs.writeFileSync(new URL("index.ts", dir), order);
console.log(`lib/cases/index.ts: ${names.length} estudos de caso`);
