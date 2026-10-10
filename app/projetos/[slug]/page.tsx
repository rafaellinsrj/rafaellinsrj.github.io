import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import ArchitectureDiagram from "@/components/case/ArchitectureDiagram";
import Gallery from "@/components/case/Gallery";
import type {Decision, Layer} from "@/lib/case-types";
import {cases, caseBySlug} from "@/lib/cases";
import {asset} from "@/lib/paths";

type Props = {params: Promise<{slug: string}>};
export const dynamicParams = false;
export function generateStaticParams() { return cases.map(c => ({slug: c.slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const item = caseBySlug(slug);
  return item ? {title: item.name, description: item.summary} : {};
}

function Layers({layers}: {layers: Layer[]}) {
  return <dl className="layer-list">{layers.map(l => <div key={l.name}><dt>{l.name}</dt><dd>{l.content}</dd></div>)}</dl>;
}

function Decisions({items}: {items: Decision[]}) {
  return <div className="decision-list">{items.map((d, i) =>
    <article key={d.title} className="decision">
      <span className="decision-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
      <div>
        <h3>{d.title}</h3>
        <dl>
          <div><dt>Problema</dt><dd>{d.problem}</dd></div>
          <div><dt>Decisão</dt><dd>{d.decision}</dd></div>
          <div><dt>Motivo</dt><dd>{d.reason}</dd></div>
          <div><dt>Compromisso</dt><dd>{d.tradeoff}</dd></div>
          {d.learning && <div><dt>Aprendizado</dt><dd>{d.learning}</dd></div>}
        </dl>
      </div>
    </article>
  )}</div>;
}

export default async function CasePage({params}: Props) {
  const {slug} = await params;
  const item = caseBySlug(slug);
  if (!item) notFound();
  const next = cases[(cases.indexOf(item) + 1) % cases.length];
  const r = item.responsibility;
  const roles = ([
    ["Liderança e direção", r.leadership],
    ["Execução técnica direta", r.direct],
    ["Trabalho da equipe", r.team],
    ["Apoio de IA", r.ai],
  ] as const).filter(([, list]) => list.length > 0);
  const toc: [string, string][] = [
    ["historia", "História e problema"],
    ["responsabilidade", "Minha responsabilidade"],
    ["arquitetura", "Arquitetura"],
    ["decisoes", "Decisões técnicas"],
    ...(item.journey || item.dataModel ? [["fluxo", "Fluxo e modelo"] as [string, string]] : []),
    ["resultados", "Resultados e próximos passos"],
    ...(item.proposal ? [["proposta", item.proposal.title] as [string, string]] : []),
    ...(item.gallery.length ? [["galeria", "Galeria"] as [string, string]] : []),
  ];
  const n = (id: string) => String(toc.findIndex(t => t[0] === id) + 1).padStart(2, "0");

  return <><Header current="projetos"/><main id="conteudo" className="case-page">
    <section className="container case-header">
      <nav className="breadcrumbs" aria-label="Você está em">
        <ol><li><Link href="/">Início</Link></li><li><Link href="/projetos/">Projetos</Link></li><li aria-current="page">{item.name}</li></ol>
      </nav>
      <p className="eyebrow">{item.category}</p>
      <h1>{item.name}</h1>
      <p className="case-intro">{item.summary}</p>
      <dl className="case-meta">
        <div><dt>Papel</dt><dd>{item.role}</dd></div>
        {(item.organization || item.period) && <div><dt>Organização e período</dt><dd>{[item.organization, item.period].filter(Boolean).join(" · ")}</dd></div>}
        <div><dt>Plataformas</dt><dd>{item.platforms.join(" · ")}</dd></div>
      </dl>
      {item.links.length > 0 && <div className="case-actions">{item.links.map(l =>
        <a key={l.url} className="button secondary" href={l.url} target="_blank" rel="noreferrer">{l.label} <Icon name="external-link"/></a>
      )}</div>}
    </section>

    <div className="container case-visual">
      <figure className="case-cover">
        <div className="project-cover screenshot-cover detail-cover"><div className="browser-strip" aria-hidden="true"><span/><span/><span/></div>
          <img src={asset(item.cover.src)} alt={item.cover.alt} width={item.cover.width} height={item.cover.height}/></div>
        <figcaption className="image-caption">{item.cover.caption}</figcaption>
      </figure>
    </div>

    <section className="container case-content">
      <aside className="case-sidebar">
        <nav aria-label="Sumário do estudo de caso"><p className="eyebrow">Sumário</p>
          <ol className="toc">{toc.map(([id, label]) => <li key={id}><a href={"#" + id}>{label}</a></li>)}</ol>
        </nav>
      </aside>
      <div className="case-main">
        <section id="historia"><p className="eyebrow">{n("historia")} / Contexto</p><h2>História e problema</h2>
          <dl className="layer-list">
            <div><dt>Para quem</dt><dd>{item.history.audience}</dd></div>
            <div><dt>Problema</dt><dd>{item.history.problem}</dd></div>
            {item.history.constraints && <div><dt>Restrições</dt><dd>{item.history.constraints}</dd></div>}
          </dl>
          {item.history.milestones.length > 0 && <ol className="milestones">{item.history.milestones.map(m =>
            <li key={m.when + m.what}><span>{m.when}</span><p>{m.what}</p></li>)}</ol>}
        </section>

        <section id="responsabilidade"><p className="eyebrow">{n("responsabilidade")} / Papel</p><h2>Minha responsabilidade</h2>
          <div className="role-grid">{roles.map(([title, list]) =>
            <div key={title}><h3>{title}</h3><ul>{list.map(x => <li key={x}>{x}</li>)}</ul></div>)}</div>
        </section>

        <section id="arquitetura"><p className="eyebrow">{n("arquitetura")} / Arquitetura</p><h2>Arquitetura documentada</h2>
          <p className="section-lead">{item.architecture.intro}</p>
          <ArchitectureDiagram diagram={item.architecture.diagram} id="diagrama"/>
          <h3 className="sub-title">Camadas e tecnologias</h3>
          <Layers layers={item.architecture.layers}/>
        </section>

        <section id="decisoes"><p className="eyebrow">{n("decisoes")} / Decisões</p><h2>Decisões técnicas e compromissos</h2>
          <Decisions items={item.decisions}/>
        </section>

        {(item.journey || item.dataModel) && <section id="fluxo"><p className="eyebrow">{n("fluxo")} / Funcionamento</p><h2>Fluxo e modelo</h2>
          {item.journey && <><h3 className="sub-title">{item.journey.title}</h3><ol className="journey">{item.journey.steps.map(s => <li key={s}>{s}</li>)}</ol></>}
          {item.dataModel && <><h3 className="sub-title">Modelo lógico simplificado</h3><dl className="layer-list">{item.dataModel.map(d => <div key={d.entity}><dt>{d.entity}</dt><dd>{d.fields}</dd></div>)}</dl></>}
        </section>}

        <section id="resultados"><p className="eyebrow">{n("resultados")} / Evidências</p><h2>Resultados e próximos passos</h2>
          <div className="results-grid">
            <div><h3>Resultados e evidências</h3><ul>{item.results.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div><h3>Próximos passos</h3><ul>{item.limits.map(x => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </section>

        {item.proposal && <section id="proposta" className="proposal"><p className="eyebrow">{n("proposta")} / Proposta</p><h2>{item.proposal.title}</h2>
          <p className="proposal-flag">Proposta de arquitetura atual. Não foi implementada.</p>
          <p className="section-lead">{item.proposal.intro}</p>
          <ArchitectureDiagram diagram={item.proposal.diagram} id="diagrama-proposta" proposal/>
          <h3 className="sub-title">Camadas propostas</h3>
          <Layers layers={item.proposal.layers}/>
          <h3 className="sub-title">Decisões que eu tomaria</h3>
          <Decisions items={item.proposal.decisions}/>
        </section>}

        {item.gallery.length > 0 && <section id="galeria"><p className="eyebrow">{n("galeria")} / Telas</p><h2>Galeria</h2>
          <Gallery images={item.gallery} name={item.name}/>
        </section>}
      </div>
    </section>

    <section className="container next-project">
      <div><p className="eyebrow">Próximo estudo de caso</p><Link href={"/projetos/" + next.slug + "/"}>{next.name} <Icon name="arrow-up-right" size={28}/></Link></div>
      <Link className="text-link" href="/projetos/"><Icon name="arrow-left"/> Todos os projetos</Link>
    </section>
  </main><Footer/></>;
}
