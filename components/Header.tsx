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
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#contato">Contato</Link>
          <a className="nav-cv" href={asset("/curriculo-rafael-lins-gaspar.pdf")} download>Baixar currículo</a>
        </nav>
      </div>
      <nav className="mobile-nav container" aria-label="Navegação no celular">
        <Link href="/#projetos">Projetos</Link>
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#contato">Contato</Link>
      </nav>
    </header>
  );
}
