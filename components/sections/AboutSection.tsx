import Icon from "@/components/Icon";
import {asset} from "@/lib/paths";
export default function AboutSection({page = false}: {page?: boolean}) {
  return <>
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <aside className="profile-card" aria-label="Apresentação de Rafael">
          <div className="profile-top"><img src={asset("/images/rafael-lins.jpg")} width="1144" height="1280" alt="Rafael Lins Gaspar" loading="lazy"/></div>
          <div className="profile-details"><p className="eyebrow">Rafael Lins Gaspar</p><h3>Visão de negócio.<br/>Execução técnica.</h3><p>Liderança em tecnologia, arquitetura e produtos digitais.</p><p className="profile-place"><Icon name="map-pin" size={14}/> Teresópolis, RJ, Brasil</p></div>
        </aside>
        <div className="about-copy"><p className="eyebrow">Sobre mim</p>{page ? <h1 className="section-h1">Tecnologia com<br/>experiência de gestão.</h1> : <h2>Tecnologia com<br/>experiência de gestão.</h2>}<p className="wide-copy">Minha trajetória combina liderança tecnológica, gestão de operações e criação de produtos digitais. Atuo na interseção entre estratégia de negócio, engenharia de software e inteligência artificial.</p><p className="about-extra">Fundei e dirigi empresas de tecnologia desde 2014, liderei engenharia no setor jurídico e hoje conduzo a tecnologia da Certame e da Vero Markets, além dos produtos da Lins Capital Group. Aprofundo a formação no curso de Inteligência Artificial da Unifeso.</p><p className="location-note"><Icon name="globe" size={16}/> Aberto a oportunidades no Brasil e em qualquer país.</p>
          <a className="text-link" href={asset("/experiencia/")}>Ver a trajetória completa <Icon name="arrow-up-right"/></a>
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
  </>;
}
