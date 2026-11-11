import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import CaseCard from "@/components/case/CaseCard";
import ContactSection from "@/components/sections/ContactSection";
import {caseBySlug, cases} from "@/lib/cases";
import {certificationGroups, issuers} from "@/lib/certifications";
import {featured} from "@/lib/portfolio";
import {asset} from "@/lib/paths";

// Início (layout v2, aprovado em 11/11/2026): quem eu sou, a prova em números, o que faço hoje,
// quatro projetos, trajetória resumida, certificações e contato. Nada é repetido por inteiro das páginas internas.
const picks = featured.map(s => caseBySlug(s)!).filter(Boolean);
const tech = certificationGroups[0];
const logos = [...new Set(tech.items.map(c => c.issuer))].map(k => issuers[k]);

const timeline = [
  {name: "Lins Capital Group · Lins Partners", period: "2026 – hoje", text: "Fundador e CTO. Hyre, The Moneta Post e clientes como o Escolhi Brasil.", current: true},
  {name: "Swiss Private", period: "2024 – 2026", text: "COO e CTO em São Paulo."},
  {name: "Escritório de advocacia", period: "2021 – 2024", text: "CTO: base de 400 para 17 mil clientes, liderando 5 desenvolvedores."},
  {name: "Rio Tech", period: "2014 – 2017", text: "CTO e sócio. Tecnologia vendida a uma empresa da Lituânia."},
];

export default function Home() {
  return <><Header/><main id="conteudo" className="v2">
    <section className="container v2-hero">
      <div className="v2-hero-copy">
        <p className="status-tag tone-ok"><span className="status-dot" aria-hidden="true"/>Disponível para posições de liderança em tecnologia</p>
        <h1>CTO que tira produtos do papel e coloca no ar.</h1>
        <p className="v2-lead">Fundador da Lins Partners. Arquiteto sistemas com IA, segurança e dados isolados por cliente, e lidero equipes da estratégia à entrega.</p>
        <div className="hero-actions">
          <Link className="button v2-primary" href="/projetos/">Ver projetos <Icon name="arrow-right"/></Link>
          <Link className="button secondary" href="/contato/">Fale comigo <Icon name="mail"/></Link>
        </div>
      </div>
      <Link href="/projetos/hyre/" className="v2-hero-shot" aria-label="Abrir o estudo de caso da Hyre">
        <div className="browser-strip" aria-hidden="true"><span/><span/><span/></div>
        <img src={asset("/images/cases/hyre/home.jpg")} alt="Página inicial da Hyre: página na bio, DMs automáticas e planejador de posts" width="1440" height="1000"/>
      </Link>
    </section>

    <section className="container" aria-label="Números">
      <dl className="v2-stats">
        <div><dt>fundando e dirigindo empresas</dt><dd>Desde 2012</dd></div>
        <div><dt>clientes no setor jurídico, com 5 devs</dt><dd>400 → 17 mil</dd></div>
        <div><dt>plataformas em produção hoje</dt><dd>3</dd></div>
        <div><dt>certificações técnicas</dt><dd>{tech.items.length}</dd></div>
      </dl>
    </section>

    <section className="container v2-block" aria-labelledby="hoje">
      <div className="v2-head"><h2 id="hoje">O que faço hoje</h2></div>
      <div className="v2-now">
        <Link href="/experiencia/" className="v2-card"><small>Empresa principal</small><h3>Lins Partners</h3><p>Fundador e CTO. Consultoria de tecnologia: auditoria de software, CTO sob demanda, produtos com IA e equipes dedicadas.</p></Link>
        <Link href="/projetos/hyre/" className="v2-card"><small>Produtos próprios</small><h3>Hyre · The Moneta Post</h3><p>SaaS para perfis e pequenos negócios e portal de notícias com pipeline editorial automatizado.</p></Link>
        <Link href="/projetos/escolhi-brasil/" className="v2-card"><small>Cliente</small><h3>Escolhi Brasil</h3><p>CTO pela Lins Partners: arquitetura, infraestrutura, segurança e esteira de publicação.</p></Link>
      </div>
    </section>

    <section className="container v2-block" aria-labelledby="destaques">
      <div className="v2-head"><h2 id="destaques">Projetos em destaque</h2><Link href="/projetos/">Ver os {cases.length} projetos <Icon name="arrow-right" size={16}/></Link></div>
      <div className="project-grid v2-featured">{picks.map(c => <CaseCard key={c.slug} item={c}/>)}</div>
    </section>

    <section className="container v2-block v2-split">
      <div>
        <div className="v2-head"><h2>Trajetória</h2><Link href="/experiencia/">Completa <Icon name="arrow-right" size={16}/></Link></div>
        <ol className="v2-tl">{timeline.map(t =>
          <li key={t.name} className={t.current ? "is-current" : undefined}><p><strong>{t.name}</strong><span>{t.period}</span></p><p>{t.text}</p></li>)}</ol>
      </div>
      <div>
        <div className="v2-head"><h2>Certificações</h2><Link href="/certificacoes/">Todas <Icon name="arrow-right" size={16}/></Link></div>
        <div className="v2-card v2-certs">
          <div className="v2-logos">{logos.map(l => <img key={l.name} src={asset(l.logo)} width={l.logoWidth} height={96} alt={l.name}/>)}</div>
          <p>{tech.items.slice(0, 3).map(c => c.name).join(", ")} e mais {tech.items.length - 3}.</p>
        </div>
      </div>
    </section>

    <ContactSection/>
  </main><Footer/></>;
}
