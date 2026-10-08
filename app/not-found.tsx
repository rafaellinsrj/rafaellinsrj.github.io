import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function NotFound() {
  return <><Header/><main id="conteudo" className="container not-found"><p className="eyebrow">Página não encontrada</p><h1>Vamos voltar<br/>aos projetos?</h1><p>O endereço pode ter mudado. A seleção completa está na página inicial.</p><Link className="button primary" href="/">Ir para o portfólio</Link></main><Footer/></>;
}
