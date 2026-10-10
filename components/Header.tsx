import Link from "next/link";
import {asset} from "@/lib/paths";

type Section = "experiencia" | "projetos" | "sobre" | "contato";
const items: [Section, string][] = [["experiencia", "Experiência"], ["projetos", "Projetos"], ["sobre", "Sobre"]];

export default function Header({current}: {current?: Section}) {
  const nav = items.map(([id, label]) =>
    <Link key={id} href={"/" + id + "/"} aria-current={current === id ? "page" : undefined}>{label}</Link>);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Rafael Lins Gaspar, início">
          <img className="brand-photo" src={asset("/images/rafael-lins.jpg")} width="40" height="40" alt=""/>
          <span>Rafael Lins Gaspar<small>Chief Technology Officer</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          {nav}
          <Link className="nav-cta" href="/contato/" aria-current={current === "contato" ? "page" : undefined}>Contato</Link>
        </nav>
      </div>
      <nav className="mobile-nav container" aria-label="Navegação no celular">{nav}</nav>
    </header>
  );
}
