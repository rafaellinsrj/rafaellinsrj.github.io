import Link from "next/link";
import Icon from "@/components/Icon";
import LegalCase from "@/components/sections/LegalCase";
import {caseBySlug} from "@/lib/cases";
import {roles} from "@/lib/experience";
export default function ExperienceSection({page = false}: {page?: boolean}) {
  const H = page ? "h2" : "h3";
  return <>
    <section id="experiencia" className="section container">
      <div className="section-heading"><div><p className="eyebrow">Experiência executiva</p>{page ? <h1 className="section-h1">Pessoas, arquitetura<br/>e <span>entrega.</span></h1> : <h2>Pessoas, arquitetura<br/>e <span>entrega.</span></h2>}</div><p>Desde 2012 entre fundação de empresas, direção técnica e operação. Cargos e períodos conforme o histórico profissional publicado no LinkedIn.</p></div>
      <LegalCase level={page ? 2 : 3}/>
      <ol className="timeline">{roles.map(r=>
        <li key={r.company} className={r.current ? "is-current" : undefined}>
          <span className="timeline-period">{r.period}</span>
          <div><H className="timeline-name">{r.cases?.length === 1 && r.company !== "Vero Markets"
            ? <Link href={"/projetos/" + r.cases[0] + "/"} className="timeline-link">{r.company} <Icon name="arrow-up-right"/></Link>
            : r.company}{r.confidential && <span className="timeline-tag">Confidencial</span>}</H><p className="timeline-role">{r.role}</p><p>{r.summary}</p>
            {r.cases && (r.cases.length > 1 || r.company === "Vero Markets") && <p className="timeline-cases"><span>{r.company === "Vero Markets" ? "Projeto relacionado" : "Projetos"}</span>{r.cases.map(slug => {
              const c = caseBySlug(slug);
              return c ? <Link key={slug} href={"/projetos/" + slug + "/"}>{c.name} <Icon name="arrow-up-right" size={14}/></Link> : null;
            })}</p>}</div>
        </li>
      )}</ol>
    </section>
  </>;
}
