import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import CaseCard from "@/components/case/CaseCard";
import LegalCase from "@/components/sections/LegalCase";
import ContactSection from "@/components/sections/ContactSection";
import {caseBySlug, cases} from "@/lib/cases";
import {roles} from "@/lib/experience";
import {asset} from "@/lib/paths";

const featured = ["190-policia-militar", "certame", "moneta", "hyre"].map(s => caseBySlug(s)!).filter(Boolean);

export default function Home() {
  return <><Header/><main id="conteudo">
    <section className="hero container">
      <div className="hero-copy">
        <p className="hero-author">Rafael Lins Gaspar</p>
        <p className="hero-role">Chief Technology Officer · Software Architecture · AI &amp; Technology Leadership</p>
        <h1>Liderança em tecnologia.<br/><span>Da estratégia ao produto.</span></h1>
        <p className="hero-description">Liderança em tecnologia, arquitetura de software e criação de produtos digitais. Experiência em engenharia, gestão de equipes e soluções de inteligência artificial, conectando decisões técnicas aos objetivos de negócio.</p>
        <div className="hero-actions">
          <a className="button primary" href={asset("/experiencia/")}>Ver experiência <Icon name="arrow-right"/></a>
          <a className="button secondary" href={asset("/projetos/")}>Explorar projetos <Icon name="arrow-right"/></a>
          <a className="button secondary" href={asset("/contato/")}>Entrar em contato <Icon name="mail"/></a>
        </div>
      </div>
      <Link href="/projetos/certame/" className="hero-workspace" aria-label="Explorar o projeto Certame">
        <div className="workspace-bar"><span><span className="signal-dot"/>Projeto em destaque</span><span>Certame <Icon name="arrow-up-right"/></span></div>
        <div className="workspace-screen"><img src={asset("/images/screens/certame.jpg")} alt="Página pública da Certame, projeto de campanhas beneficentes" width="1440" height="1000"/></div>
        <div className="workspace-footer"><span>Da interface às regras de negócio.</span><span className="code-label">Python / FastAPI / React</span></div>
      </Link>
    </section>
    <div className="stack-band container"><p>Tecnologias que conectam as etapas.</p><div className="technology-tiles">{["Python", "FastAPI", "React", "TypeScript", "PostgreSQL"].map(tech=><div key={tech}>{tech}</div>)}</div></div>
    <section className="section container">
      <div className="section-heading"><div><p className="eyebrow">Experiência executiva</p><h2>Pessoas, arquitetura<br/>e <span>entrega.</span></h2></div><p>Desde 2012 entre fundação de empresas, direção técnica e operação.</p></div>
      <LegalCase/>
      <ul className="role-strip">{roles.filter(r => r.current).map(r =>
        <li key={r.company} className={r.main ? "is-main" : undefined}><strong>{r.company}</strong><span>{r.role}{r.main ? " · empresa principal" : ""}</span></li>)}</ul>
      <div className="section-more"><Link className="button secondary" href="/experiencia/">Ver a trajetória completa <Icon name="arrow-right"/></Link></div>
    </section>
    <section className="section container">
      <div className="section-heading"><div><p className="eyebrow">Estudos de caso em destaque</p><h2>Produto, arquitetura<br/>e <span>decisões.</span></h2></div><p>Uma seleção dos projetos com maior profundidade técnica.</p></div>
      <div className="project-grid">{featured.map(c => <CaseCard key={c.slug} item={c}/>)}</div>
      <div className="section-more"><Link className="button secondary" href="/projetos/">Ver os {cases.length} estudos de caso <Icon name="arrow-right"/></Link></div>
    </section>
    <ContactSection/>
  </main><Footer/></>;
}
