import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCover from "@/components/ProjectCover";
import {projects, websites, experiments} from "@/lib/projects";
import {asset} from "@/lib/paths";

const featuredSlugs = ["certame", "hyre", "moneta", "bioo", "lmm", "lins-payments"];
const featuredProjects = featuredSlugs.map(slug => projects.find(p => p.slug === slug)!);
const moreProjects = projects.filter(p => !featuredSlugs.includes(p.slug));

const experience = [
  ["Certame", "CTO e sócio"],
  ["The Moneta Post", "Fundador"],
  ["Hyre", "Fundador e CEO"],
  ["Vero Markets", "CTO"],
  ["Swiss Private", "COO e CTO"],
  ["Rio Tec Tecnologia e Serviços", "CTO e sócio"]
];

export default function Home() {
  return <><Header/><main id="conteudo">
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-rule"/>Fullstack · Produtos com IA</p>
        <h1>Desenvolvo produtos<br/>digitais <span>de ponta<br className="desktop-br"/> a ponta.</span></h1>
        <p className="hero-description">Sou Rafael Lins Gaspar. Conecto desenvolvimento de software, inteligência artificial e experiência em gestão para transformar ideias em aplicações.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projetos">Conheça os projetos <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/rlins/" target="_blank" rel="noreferrer">Meu LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <aside className="profile-card" aria-label="Apresentação de Rafael">
        <div className="profile-top"><img src={asset("/images/rafael-lins.jpg")} width="160" height="160" alt="Rafael Lins Gaspar"/><span className="profile-monogram" aria-hidden="true">RL</span></div>
        <div className="profile-details">
          <p className="eyebrow">Rafael Lins Gaspar</p>
          <h2>Visão de negócio.<br/>Execução técnica.</h2>
          <p>Do backend à interface, com experiência em liderança técnica e operação de produtos.</p>
          <div className="profile-place"><span>Teresópolis, RJ</span><span>Disponível para mudança para Curitiba</span></div>
        </div>
      </aside>
    </section>
    <div className="stack-band"><div className="container"><span>Tecnologias no meu trabalho</span><p>Python<span>/</span>FastAPI<span>/</span>React<span>/</span>TypeScript<span>/</span>PostgreSQL</p></div></div>
    <section id="projetos" className="section container">
      <div className="section-heading"><div><p className="eyebrow">Projetos selecionados</p><h2>Produto, código e contexto.</h2></div><p>Telas dos projetos, minha participação e as escolhas técnicas por trás de cada produto.</p></div>
      <div className="project-grid">{featuredProjects.map((p,i)=>
        <article className="project-card" key={p.slug}>
          <Link className="project-card-link" href={"/projetos/" + p.slug + "/"} aria-label={"Conhecer o projeto " + p.name}>
            <ProjectCover project={p} index={i}/>
            <div className="project-info"><p className="eyebrow">{p.category}</p><h3>{p.name}<span className="card-arrow" aria-hidden="true">↗</span></h3><p>{p.description}</p><div className="project-card-bottom"><span className="status">{p.status}</span><span className="case-label">Ver projeto</span></div></div>
          </Link>
        </article>
      )}</div>
    </section>
    <section className="section extended-section">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">Outras frentes</p><h2>Da integração à experimentação.</h2></div><p>Atendimento, agentes inteligentes, simulação de operações e ferramentas para o navegador.</p></div>
        <div className="more-project-grid">{moreProjects.map(p=>
          <article className="project-card compact-project" key={p.slug}>
            <Link className="project-card-link" href={"/projetos/" + p.slug + "/"}>
              <ProjectCover project={p}/>
              <div className="project-info"><p className="eyebrow">{p.category}</p><h3>{p.name}<span className="card-arrow" aria-hidden="true">↗</span></h3><p>{p.description}</p><div className="project-card-bottom"><span className="status">{p.status}</span><span className="case-label">Ver projeto</span></div></div>
            </Link>
          </article>
        )}</div>
      </div>
    </section>
    <section className="section container client-section">
      <div className="section-heading"><div><p className="eyebrow">Sites e presença digital</p><h2>Diferentes negócios.<br/>Cada um com sua identidade.</h2></div><p>Projetos para profissionais e empresas, com foco em apresentação de serviços, conteúdo e contato.</p></div>
      <div className="website-grid">{websites.map(p=>
        <article className="website-card" key={p.slug}>
          <a className="website-image" href={asset(p.image)} target="_blank" rel="noreferrer" aria-label={"Ampliar tela de " + p.name}>
            <img src={asset(p.image)} width="1440" height="1000" alt={"Tela do site " + p.name} loading="lazy"/>
            <span className="enlarge-label">Ampliar tela <span aria-hidden="true">↗</span></span>
          </a>
          <div className="website-info"><p className="eyebrow">{p.kind}</p><h3>{p.name}</h3><p>{p.text}</p>
            <div className="website-bottom"><span className="website-tech">{p.tech}</span>{p.url
              ? <a className="small-link" href={p.url} target="_blank" rel="noreferrer" aria-label={"Visitar site de " + p.name}>Visitar site ↗</a>
              : <span className="capture-label">Captura local</span>}</div>
          </div>
        </article>
      )}</div>
      <details className="lab-details">
        <summary><span>Mais ferramentas e experimentos<span className="summary-subtitle">Datas, conversores, sorteios, currículos e calculadoras</span></span><span className="details-plus" aria-hidden="true">+</span></summary>
        <div className="lab-body"><p className="lab-note">Interfaces capturadas a partir das versões locais dos projetos. Selecione uma tela para ampliar.</p>
          <div className="lab-grid">{experiments.map(p=>
            <article key={p.name}>
              <a href={asset(p.image)} target="_blank" rel="noreferrer" className="lab-image" aria-label={"Ampliar tela de " + p.name}><img src={asset(p.image)} alt={"Interface de " + p.name} width="1440" height="1000" loading="lazy"/><span aria-hidden="true">↗</span></a>
              <h3>{p.name}</h3><p>{p.text}</p>
            </article>
          )}</div>
        </div>
      </details>
    </section>
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <div><p className="eyebrow">Sobre mim</p><h2>Tecnologia com<br/>experiência de gestão.</h2><p className="wide-copy">Minha trajetória reúne desenvolvimento fullstack, criação de produtos e liderança como CTO e COO. Essa combinação me ajuda a relacionar arquitetura, operação e necessidades de negócio.</p><p className="about-extra">Trabalho com aplicações web, APIs, integrações e produtos apoiados por IA. Atualmente aprofundo essa formação no curso de Inteligência Artificial da Unifeso.</p><p className="location-note">Já morei em Curitiba e tenho disponibilidade para retornar mediante contratação.</p></div>
        <div className="experience-panel"><h3>Experiência selecionada</h3><div className="experience-list">{experience.map(([company,role])=><div className="experience-row" key={company}><div><strong>{company}</strong><span>{role}</span></div></div>)}</div><a className="text-link" href={asset("/curriculo-rafael-lins-gaspar.pdf")} download>Trajetória completa no currículo <span aria-hidden="true">↓</span></a></div>
      </div>
    </section>
    <section className="section container">
      <div className="section-heading"><div><p className="eyebrow">Base técnica</p><h2>Construir. Integrar. Evoluir.</h2></div></div>
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
      <div className="container contact-inner"><div><p className="eyebrow">Vamos conversar</p><h2>Uma oportunidade.<br/>Um produto.<br/><span>Uma boa conversa.</span></h2></div><div className="contact-links"><p>Estou aberto a oportunidades em desenvolvimento fullstack e projetos de tecnologia.</p><a className="contact-email" href="mailto:33.rafaellins@gmail.com">33.rafaellins@gmail.com <span aria-hidden="true">↗</span></a><div className="social-links"><a href="https://www.linkedin.com/in/rlins/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://github.com/rafaellinsrj" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://wa.me/5521976688686" target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a></div><a className="button primary" href={asset("/curriculo-rafael-lins-gaspar.pdf")} download>Baixar currículo <span aria-hidden="true">↓</span></a></div></div>
    </section>
  </main><Footer/></>;
}
