import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseCard from "@/components/case/CaseCard";
import Gallery from "@/components/case/Gallery";
import {experiments} from "@/lib/projects";
import {groupOrder, ordered} from "@/lib/cases";
import {asset} from "@/lib/paths";
import Icon from "@/components/Icon";
import {roles} from "@/lib/experience";

export default function Home() {
  return <><Header/><main id="conteudo">
    <section className="hero container">
      <div className="hero-copy">
        <p className="hero-author"><img src={asset("/images/rafael-lins.jpg")} width="40" height="40" alt=""/>Rafael Lins Gaspar</p>
        <p className="hero-role">Chief Technology Officer · Software Architecture · AI &amp; Technology Leadership</p>
        <h1>Liderança em tecnologia.<br/><span>Da estratégia ao produto.</span></h1>
        <p className="hero-description">Liderança em tecnologia, arquitetura de software e criação de produtos digitais. Experiência em engenharia, gestão de equipes e soluções de inteligência artificial, conectando decisões técnicas aos objetivos de negócio.</p>
        <div className="hero-actions">
          <a className="button primary" href="#experiencia">Ver experiência <Icon name="arrow-down"/></a>
          <a className="button secondary" href="#projetos">Explorar projetos <Icon name="arrow-down"/></a>
          <a className="button secondary" href="#contato">Entrar em contato <Icon name="mail"/></a>
        </div>
      </div>
      <Link href="/projetos/certame/" className="hero-workspace" aria-label="Explorar o projeto Certame">
        <div className="workspace-bar"><span><span className="signal-dot"/>Projeto em destaque</span><span>Certame <Icon name="arrow-up-right"/></span></div>
        <div className="workspace-screen"><img src={asset("/images/screens/certame.jpg")} alt="Página pública da Certame, projeto de campanhas beneficentes" width="1440" height="1000"/></div>
        <div className="workspace-footer"><span>Da interface às regras de negócio.</span><span className="code-label">Python / FastAPI / React</span></div>
      </Link>
    </section>
    <div className="stack-band container"><p>Tecnologias que conectam as etapas.</p><div className="technology-tiles">{["Python", "FastAPI", "React", "TypeScript", "PostgreSQL"].map(tech=><div key={tech}>{tech}</div>)}</div></div>
    <section id="experiencia" className="section container">
      <div className="section-heading"><div><p className="eyebrow">Experiência executiva</p><h2>Pessoas, arquitetura<br/>e <span>entrega.</span></h2></div><p>Desde 2012 entre fundação de empresas, direção técnica e operação. Cargos e períodos conforme o histórico profissional publicado no LinkedIn.</p></div>
      <article className="legal-case" aria-labelledby="caso-juridico">
        <div className="legal-copy">
          <p className="eyebrow">CTO · Setor jurídico · 2021 – 2024</p>
          <h3 id="caso-juridico">Tecnologia apoiando a expansão de 400 para 17 mil clientes.</h3>
          <p>Atuei como Chief Technology Officer em um escritório de advocacia em fase de expansão. Durante minha atuação, a base passou de aproximadamente 400 para 17 mil clientes, em um processo de crescimento apoiado por tecnologia. Liderei diretamente uma equipe de cinco desenvolvedores, em uma organização com mais de 25 colaboradores, alinhando o desenvolvimento às necessidades da operação.</p>
          <p className="legal-note">Identidade da organização preservada por confidencialidade.</p>
        </div>
        <dl className="legal-metrics">
          <div><dt><Icon name="trending-up" size={18}/> Base de clientes</dt><dd>~400 <Icon name="arrow-right" size={18}/> 17 mil</dd></div>
          <div><dt><Icon name="users" size={18}/> Liderança direta</dt><dd>5 desenvolvedores</dd></div>
          <div><dt><Icon name="building" size={18}/> Organização</dt><dd>25+ colaboradores</dd></div>
        </dl>
      </article>
      <ol className="timeline">{roles.map(r=>
        <li key={r.company} className={r.current ? "is-current" : undefined}>
          <span className="timeline-period">{r.period}</span>
          <div><h3>{r.company}{r.confidential && <span className="timeline-tag">Confidencial</span>}</h3><p className="timeline-role">{r.role}</p><p>{r.summary}</p></div>
        </li>
      )}</ol>
    </section>
    <section id="projetos" className="section container">
      <div className="section-heading"><div><p className="eyebrow">Estudos de caso</p><h2>Produto, arquitetura<br/>e <span>decisões.</span></h2></div><p>Cada projeto tem uma página com contexto, minha participação, arquitetura documentada, decisões técnicas, estágio real e evidências.</p></div>
      {groupOrder.map(g => {
        const items = ordered(g.group);
        if (!items.length) return null;
        return <section key={g.group} className="case-group" aria-labelledby={"grupo-" + g.group}>
          <div className="case-group-head"><h3 id={"grupo-" + g.group}>{g.title}</h3><p>{g.text}</p></div>
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
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <aside className="profile-card" aria-label="Apresentação de Rafael">
          <div className="profile-top"><img src={asset("/images/rafael-lins.jpg")} width="1144" height="1280" alt="Rafael Lins Gaspar" loading="lazy"/></div>
          <div className="profile-details"><p className="eyebrow">Rafael Lins Gaspar</p><h3>Visão de negócio.<br/>Execução técnica.</h3><p>Liderança em tecnologia, arquitetura e produtos digitais.</p><p className="profile-place"><Icon name="map-pin" size={14}/> Teresópolis, RJ, Brasil</p></div>
        </aside>
        <div className="about-copy"><p className="eyebrow">Sobre mim</p><h2>Tecnologia com<br/>experiência de gestão.</h2><p className="wide-copy">Minha trajetória combina liderança tecnológica, gestão de operações e criação de produtos digitais. Atuo na interseção entre estratégia de negócio, engenharia de software e inteligência artificial.</p><p className="about-extra">Fundei e dirigi empresas de tecnologia desde 2014, liderei engenharia no setor jurídico e hoje conduzo a tecnologia da Certame e da Vero Markets, além dos produtos da Lins Capital Group. Aprofundo a formação no curso de Inteligência Artificial da Unifeso.</p><p className="location-note"><Icon name="globe" size={16}/> Aberto a oportunidades no Brasil e em qualquer país.</p>
          <a className="text-link" href="#experiencia">Ver a trajetória completa <Icon name="arrow-up-right"/></a>
        </div>
      </div>
    </section>
    <section className="section container">
      <div className="section-heading"><div><p className="eyebrow">Base técnica</p><h2>Construir. Integrar.<br/><span>Evoluir.</span></h2></div></div>
      <div className="skills-grid">
        <div><span className="skill-number">01 / BACKEND E DADOS</span><h3>A estrutura do produto</h3><p>Python, FastAPI, Pydantic, SQLAlchemy, Node.js, PHP/Laravel, PostgreSQL, MySQL, Redis e Celery.</p></div>
        <div><span className="skill-number">02 / FRONTEND E INTEGRAÇÕES</span><h3>A experiência em uso</h3><p>React, Next.js, TypeScript, TanStack Query, Tailwind CSS, APIs REST, OAuth2, webhooks e APIs de IA.</p></div>
        <div><span className="skill-number">03 / QUALIDADE E OPERAÇÃO</span><h3>Da mudança à entrega</h3><p>pytest, Playwright, Vitest, Git, GitHub Actions, Docker, Linux e AWS. Desenvolvimento com apoio de Codex e Claude Code.</p></div>
      </div>
      <div className="education-grid">
        <div><p className="eyebrow">Formação acadêmica</p><h3>Inteligência Artificial</h3><p>Unifeso · 2º período · On-line<br/><span className="education-status">Em andamento</span></p></div>
        <div><h3>Gestão Estratégica de Negócios</h3><p>Pós-graduação · Fundação Getulio Vargas</p><h3>Engenharia de Produção</h3><p>Universidade Veiga de Almeida</p></div>
        <div><h3>Formação complementar</h3><p>The Science and Implications of Generative AI · Harvard Kennedy School</p><p>Gestão de Processos e Melhoria Contínua · FGV</p><p className="language-note">Português nativo · Inglês intermediário</p></div>
      </div>
    </section>
    <section id="contato" className="section contact-section">
      <div className="container contact-inner"><div><p className="eyebrow">Vamos conversar</p><h2>Uma equipe.<br/>Um produto.<br/><span>Uma boa conversa.</span></h2></div><div className="contact-links"><p>Aberto a posições de liderança em tecnologia e a novos produtos, no Brasil e em qualquer país.</p><a className="contact-email" href="mailto:33.rafaellins@gmail.com"><Icon name="mail" size={20}/> 33.rafaellins@gmail.com</a><div className="social-links"><a href="https://www.linkedin.com/in/rlins/" target="_blank" rel="noreferrer"><Icon name="linkedin"/> LinkedIn</a><a href="https://github.com/rafaellinsrj" target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a><a href="https://wa.me/5521976688686" target="_blank" rel="noreferrer"><Icon name="message"/> WhatsApp</a></div></div></div>
    </section>
  </main><Footer/></>;
}
