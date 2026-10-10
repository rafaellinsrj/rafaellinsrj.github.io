import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/ibm-plex-mono/400.css";
import {asset} from "@/lib/paths";
import "./globals.css";

export const viewport: Viewport = {themeColor:"#111111", colorScheme:"dark"};

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaellinsrj.github.io"),
  title: {default:"Rafael Lins Gaspar | Chief Technology Officer", template:"%s | Rafael Lins Gaspar"},
  description:"Rafael Lins Gaspar, Chief Technology Officer: liderança em tecnologia, arquitetura de software, inteligência artificial e criação de produtos digitais.",
  icons:{icon:asset("/favicon.svg")},
  openGraph: {type:"website", locale:"pt_BR", siteName:"Rafael Lins Gaspar"},
  robots:{index:true,follow:true}
};

export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><a className="skip-link" href="#conteudo">Ir para o conteúdo</a>{children}</body></html>;
}
