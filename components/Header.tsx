import Link from "next/link";
import {asset} from "@/lib/paths";

// Menu do layout v2: Projetos, Trajetória (antiga Experiência + Sobre) e Certificações, com o contato em botão.
type Section = "experiencia" | "projetos" | "certificacoes" | "sobre" | "contato";
const items: [Section, string, string][] = [["projetos", "Projetos", "/projetos/"], ["experiencia", "Trajetória", "/experiencia/"], ["certificacoes", "Certificações", "/certificacoes/"]];

export default function Header({current}: {current?: Section}) {
  const cur = current === "sobre" ? "experiencia" : current;
  const nav = items.map(([id, label, href]) =>
    <Link key={id} href={href} aria-current={cur === id ? "page" : undefined}>{label}</Link>);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Rafael Lins Gaspar, início">
          <img className="brand-photo" src={asset("/images/rafael-lins.jpg")} width="40" height="40" alt=""/>
          <span>Rafael Lins Gaspar<small>CTO · Arquitetura de software · IA</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          {nav}
          <Link className="nav-cta" href="/contato/" aria-current={cur === "contato" ? "page" : undefined}>Fale comigo</Link>
        </nav>
      </div>
      <nav className="mobile-nav container" aria-label="Navegação no celular">{nav}</nav>
    </header>
  );
}
