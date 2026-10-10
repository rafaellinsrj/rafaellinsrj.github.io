import Icon from "@/components/Icon";
import CaseCard from "@/components/case/CaseCard";
import Gallery from "@/components/case/Gallery";
import {experiments} from "@/lib/projects";
import {groupOrder, ordered} from "@/lib/cases";
export default function ProjectsSection({page = false}: {page?: boolean}) {
  const H = page ? "h2" : "h3";
  return <>
    <section id="projetos" className="section container">
      <div className="section-heading"><div><p className="eyebrow">Estudos de caso</p>{page ? <h1 className="section-h1">Produto, arquitetura<br/>e <span>decisões.</span></h1> : <h2>Produto, arquitetura<br/>e <span>decisões.</span></h2>}</div><p>Cada projeto tem uma página com contexto, minha participação, arquitetura documentada, decisões técnicas, estágio real e evidências.</p></div>
      {groupOrder.map(g => {
        const items = ordered(g.group);
        if (!items.length) return null;
        return <section key={g.group} className="case-group" aria-labelledby={"grupo-" + g.group}>
          <div className="case-group-head"><H id={"grupo-" + g.group} className="case-group-title">{g.title}</H><p>{g.text}</p></div>
          <div className={g.group === "sites" || g.group === "ferramentas" || g.group === "fintech" ? "more-project-grid" : "project-grid"}>
            {items.map(c => <CaseCard key={c.slug} item={c} compact={g.group === "sites" || g.group === "ferramentas" || g.group === "fintech"}/>)}
          </div>
        </section>;
      })}
      <details className="lab-details">
        <summary><span>Mais ferramentas e experimentos<span className="summary-subtitle">Datas, conversores, sorteios, currículos e calculadoras</span></span><span className="details-plus"><Icon name="plus" size={28}/></span></summary>
        <div className="lab-body"><p className="lab-note">Interfaces capturadas a partir das versões locais dos projetos. Selecione uma tela para ampliar.</p>
          <Gallery images={experiments.map(e => ({src: e.image, width: 1440, height: 1000, alt: "Interface de " + e.name, caption: e.name + ": " + e.text + " Versão local."}))} name="ferramentas e experimentos"/>
        </div>
      </details>
    </section>
  </>;
}
