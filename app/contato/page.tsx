import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {title: "Contato", description: "Contato de Rafael Lins Gaspar para posições de liderança em tecnologia e novos produtos."};

export default function Page() {
  return <><Header current="contato"/><main id="conteudo" className="section-page">
    <ContactSection page/>
  </main><Footer/></>;
}
