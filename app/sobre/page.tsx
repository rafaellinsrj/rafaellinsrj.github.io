import type {Metadata} from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {asset} from "@/lib/paths";

// Layout v2: o conteúdo de "Sobre" passou para o fim da Trajetória. Este endereço continua existindo e leva até lá.
export const metadata: Metadata = {title: "Sobre", description: "Sobre Rafael Lins Gaspar: agora no fim da página Trajetória.", robots: {index: false}};

export default function Page() {
  return <><Header current="sobre"/><main id="conteudo" className="section container">
    <meta httpEquiv="refresh" content={"0; url=" + asset("/experiencia/#sobre")}/>
    <p>Esta parte agora fica no fim da <Link href="/experiencia/#sobre">Trajetória</Link>.</p>
  </main><Footer/></>;
}
