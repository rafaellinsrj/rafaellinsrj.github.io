import Link from "next/link";
import Icon from "@/components/Icon";
import AboutSection from "@/components/sections/AboutSection";
import {caseBySlug} from "@/lib/cases";
import {roles} from "@/lib/experience";

// Trajetória (layout v2): uma linha do tempo só. Os cargos atuais ficam juntos sob a Lins Capital Group,
// o caso do setor jurídico vira destaque dentro da linha e a parte "Sobre" (foto, formação e base técnica) fecha a página.
const grouped = ["Hyre", "The Moneta Post", "Escolhi Brasil"];

export default function ExperienceSection({page = false}: {page?: boolean}) {
  const H = page ? "h2" : "h3";
  const main = roles.find(r => r.main)!;
  const inside = roles.filter(r => grouped.includes(r.company));
  const rest = roles.filter(r => !r.main && !grouped.includes(r.company));
  const link = (slug?: string) => slug && caseBySlug(slug) ? "/projetos/" + slug + "/" : undefined;
  return <>
    <section id="experiencia" className="section container v2-traj">
      <div className="v2-page-head">{page ? <h1>Trajetória</h1> : <h2>Trajetória</h2>}
        <p>Desde 2012 entre fundação de empresas, direção técnica e operação. Cargos e períodos conforme o LinkedIn.</p></div>
      <ol className="timeline v2-timeline">
        <li className="is-current is-main">
          <span className="timeline-period">{main.period}</span>
          <div><H className="timeline-name">{main.company}<span className="timeline-tag timeline-tag-main">Empresa principal</span></H>
            <p className="timeline-role">{main.role}</p>
            <p>Consultoria de tecnologia: auditoria de software e segurança, due diligence técnica, CTO e arquitetura sob demanda, produtos com IA, nuvem e DevOps e equipes dedicadas.</p>
            <ul className="v2-sub">{inside.map(r => {
              const href = link(r.link);
              return <li key={r.company}>
                <p className="v2-sub-head">{href ? <Link href={href}>{r.company} <Icon name="arrow-up-right" size={14}/></Link> : r.company}<span>{r.role} · {r.period}</span></p>
                <p>{r.summary}</p></li>;
            })}</ul>
          </div>
        </li>
        {rest.map(r => {
          const href = link(r.link);
          return <li key={r.company} className={r.current ? "is-current" : undefined}>
            <span className="timeline-period">{r.period}</span>
            <div><H className="timeline-name">{href ? <Link href={href} className="timeline-link">{r.company} <Icon name="arrow-up-right"/></Link> : r.company}{r.confidential && <span className="timeline-tag">Confidencial</span>}</H>
              <p className="timeline-role">{r.role}</p><p>{r.summary}</p>
              {r.confidential && <dl className="v2-legal">
                <div><dt>Base de clientes</dt><dd>~400 → 17 mil</dd></div>
                <div><dt>Liderança direta</dt><dd>5 desenvolvedores</dd></div>
                <div><dt>Organização</dt><dd>25+ pessoas</dd></div>
              </dl>}
              {r.cases && r.cases.length > 0 && <p className="timeline-cases"><span>Projetos</span>{r.cases.map(slug => {
                const c = caseBySlug(slug);
                return c ? <Link key={slug} href={"/projetos/" + slug + "/"}>{c.name} <Icon name="arrow-up-right" size={14}/></Link> : null;
              })}</p>}</div>
          </li>;
        })}
      </ol>
    </section>
    {page && <AboutSection embedded/>}
  </>;
}
