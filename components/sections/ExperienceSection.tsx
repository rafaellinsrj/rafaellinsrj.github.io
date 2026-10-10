import Link from "next/link";
import Icon from "@/components/Icon";
import LegalCase from "@/components/sections/LegalCase";
import MainCompany from "@/components/sections/MainCompany";
import {caseBySlug} from "@/lib/cases";
import {roles} from "@/lib/experience";
export default function ExperienceSection({page = false}: {page?: boolean}) {
  const H = page ? "h2" : "h3";
  return <>
    <section id="experiencia" className="section container">
      <div className="section-heading"><div><p className="eyebrow">Experiência executiva</p>{page ? <h1 className="section-h1">Pessoas, arquitetura<br/>e <span>entrega.</span></h1> : <h2>Pessoas, arquitetura<br/>e <span>entrega.</span></h2>}</div><p>Desde 2012 entre fundação de empresas, direção técnica e operação. Cargos e períodos conforme o histórico profissional publicado no LinkedIn.</p></div>
      <MainCompany level={page ? 2 : 3}/>
      <LegalCase level={page ? 2 : 3}/>
      <ol className="timeline">{roles.map(r=>
        <li key={r.company} className={[r.current ? "is-current" : "", r.main ? "is-main" : ""].join(" ").trim() || undefined}>
          <span className="timeline-period">{r.period}</span>
          <div><H className="timeline-name">{r.link && caseBySlug(r.link)
            ? <Link href={"/projetos/" + r.link + "/"} className="timeline-link">{r.company} <Icon name="arrow-up-right"/></Link>
            : r.company}{r.confidential && <span className="timeline-tag">Confidencial</span>}{r.main && <span className="timeline-tag timeline-tag-main">Empresa principal</span>}</H><p className="timeline-role">{r.role}</p><p>{r.summary}</p>
            {r.cases && <p className="timeline-cases"><span>Projetos</span>{r.cases.map(slug => {
              const c = caseBySlug(slug);
              return c ? <Link key={slug} href={"/projetos/" + slug + "/"}>{c.name} <Icon name="arrow-up-right" size={14}/></Link> : null;
            })}</p>}</div>
        </li>
      )}</ol>
    </section>
  </>;
}
