// Gerado por scripts/gen-cases-index.mjs. Não editar à mão.
import type {CaseStudy, Group} from "@/lib/case-types";
import {policia190} from "./190-policia-militar";
import {arlene} from "./arlene";
import {autistasocial} from "./autistasocial";
import {bioo} from "./bioo";
import {caio} from "./caio";
import {certame} from "./certame";
import {cgm} from "./cgm";
import {devkit} from "./devkit";
import {easyspa} from "./easyspa";
import {fivex} from "./fivex";
import {hyre} from "./hyre";
import {linsPayments} from "./lins-payments";
import {linsUpNow} from "./lins-up-now";
import {lmm} from "./lmm";
import {moneta} from "./moneta";
import {prestoPdf} from "./presto-pdf";
import {sitefacil} from "./sitefacil";
import {viamanzoni} from "./viamanzoni";
import {vitoria} from "./vitoria";
import {zappop} from "./zappop";

export const cases: CaseStudy[] = [policia190, arlene, autistasocial, bioo, caio, certame, cgm, devkit, easyspa, fivex, hyre, linsPayments, linsUpNow, lmm, moneta, prestoPdf, sitefacil, viamanzoni, vitoria, zappop];
export const caseBySlug = (slug: string) => cases.find(c => c.slug === slug);

// Ordem de apresentação (especificação V2, seção 8): histórico Rio Tech, plataformas complexas, plataformas e fintech, ferramentas, sites.
export const groupOrder: {group: Group; title: string; text: string}[] = [
  {group: "riotech", title: "Histórico Rio Tech", text: "Projetos de 2014 e 2015, com o que foi construído e como eu os arquitetaria hoje."},
  {group: "plataformas", title: "Plataformas", text: "Produtos com arquitetura completa, integrações, operação e qualidade."},
  {group: "fintech", title: "Fintech e mercados", text: "Produtos financeiros, mercados de previsão e sistemas quantitativos."},
  {group: "ferramentas", title: "Ferramentas e pesquisa", text: "Aplicações de navegador e trabalho acadêmico em equipe."},
  {group: "sites", title: "Sites profissionais", text: "Engenharia web para profissionais e empresas: desempenho, SEO, acessibilidade e implantação."},
];
const priority = ["190-policia-militar", "easyspa", "certame", "vero-markets", "moneta", "hyre", "bioo", "zappop", "lmm", "lins-payments", "lins-up-now", "presto-pdf", "devkit", "fivex"];
export const ordered = (group: Group) => cases.filter(c => c.group === group).sort((a, b) => {
  const ia = priority.indexOf(a.slug), ib = priority.indexOf(b.slug);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.name.localeCompare(b.name, "pt-BR");
});
