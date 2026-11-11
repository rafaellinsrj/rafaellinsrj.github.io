import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {title: "Trajetória", description: "Trajetória de Rafael Lins Gaspar: CTO e fundador, linha do tempo, caso do setor jurídico, formação e base técnica."};

export default function Page() {
  return <><Header current="experiencia"/><main id="conteudo" className="section-page">
    <ExperienceSection page/>
  </main><Footer/></>;
}
