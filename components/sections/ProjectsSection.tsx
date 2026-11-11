import Icon from "@/components/Icon";
import CaseCard from "@/components/case/CaseCard";
import Gallery from "@/components/case/Gallery";
import ProjectFilter from "@/components/sections/ProjectFilter";
import {experiments} from "@/lib/projects";
import {caseBySlug, cases} from "@/lib/cases";
import {info, kinds, order} from "@/lib/portfolio";

// Projetos (layout v2): filtros por tipo, selo de situação e os mais recentes primeiro.
export default function ProjectsSection({page = false}: {page?: boolean}) {
  const list = [...order.map(s => caseBySlug(s)!).filter(Boolean), ...cases.filter(c => !info[c.slug])];
  const tabs = kinds.map(k => ({...k, count: list.filter(c => info[c.slug]?.kind === k.id).length})).filter(t => t.count > 0);
  return <section id="projetos" className="section container v2-projects">
    <div className="v2-page-head">{page ? <h1>Projetos</h1> : <h2>Projetos</h2>}
      <p>{list.length} estudos de caso com contexto, o que eu fiz, arquitetura, decisões e resultados. Os mais recentes primeiro.</p></div>
    <ProjectFilter tabs={tabs} cards={list.map(c => ({key: c.slug, kind: info[c.slug]?.kind ?? "ferramenta", node: <CaseCard item={c}/>}))}/>
    <details className="lab-details">
      <summary><span>Mais {experiments.length} ferramentas e experimentos<span className="summary-subtitle">Converto, My Download, Feria, Zodia, Datera, Sortea e outras, em versão local</span></span><span className="details-plus"><Icon name="plus" size={28}/></span></summary>
      <div className="lab-body"><p className="lab-note">Interfaces capturadas a partir das versões locais dos projetos. Selecione uma tela para ampliar.</p>
        <Gallery images={experiments.map(e => ({src: e.image, width: 1440, height: 1000, alt: "Interface de " + e.name, caption: e.name + ": " + e.text + " Versão local."}))} name="ferramentas e experimentos"/>
      </div>
    </details>
  </section>;
}
