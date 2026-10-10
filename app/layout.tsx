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
  openGraph: {type:"website", locale:"pt_BR", siteName:"Rafael Lins Gaspar", url:"https://rafaellinsrj.github.io/", title:"Rafael Lins Gaspar | Chief Technology Officer", description:"Liderança em tecnologia, arquitetura de software e criação de produtos digitais.", images:[{url:"/og.png", width:1200, height:630, alt:"Rafael Lins Gaspar, Chief Technology Officer"}]},
  twitter: {card:"summary_large_image", images:["/og.png"]},
  robots:{index:true,follow:true}
};

export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><a className="skip-link" href="#conteudo">Ir para o conteúdo</a>{children}</body></html>;
}
