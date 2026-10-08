import Link from "next/link";
import {asset} from "@/lib/paths";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Rafael Lins Gaspar, início">
          <span className="brand-mark" aria-hidden="true">rl<span>.</span></span>
          <span>Rafael Lins Gaspar<small>Desenvolvedor Fullstack</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          <a href={asset("/#projetos")}>Projetos</a>
          <a href={asset("/#sobre")}>Sobre</a>
          <a href={asset("/#contato")}>Contato</a>
          <a className="nav-cv" href={asset("/curriculo-rafael-lins-gaspar.pdf")} download>Baixar currículo</a>
        </nav>
      </div>
      <nav className="mobile-nav container" aria-label="Navegação no celular">
        <a href={asset("/#projetos")}>Projetos</a>
        <a href={asset("/#sobre")}>Sobre</a>
        <a href={asset("/#contato")}>Contato</a>
      </nav>
    </header>
  );
}
