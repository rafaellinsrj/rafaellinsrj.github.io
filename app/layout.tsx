import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/ibm-plex-mono/400.css";
import {asset} from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaellinsrj.github.io"),
  title: {default:"Rafael Lins Gaspar | Desenvolvedor Fullstack", template:"%s | Rafael Lins Gaspar"},
  description:"Portfólio de Rafael Lins Gaspar: aplicações web, produtos com IA, integrações e desenvolvimento fullstack com Python, FastAPI, React e TypeScript.",
  icons:{icon:asset("/favicon.svg")},
  openGraph: {type:"website", locale:"pt_BR", siteName:"Rafael Lins Gaspar"},
  robots:{index:true,follow:true}
};

export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Ir para o conteúdo</a>{children}</body></html>;
}
