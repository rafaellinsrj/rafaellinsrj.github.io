import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {title: "Experiência", description: "Trajetória executiva de Rafael Lins Gaspar: CTO, fundador e liderança de engenharia, com linha do tempo e caso do setor jurídico."};

export default function Page() {
  return <><Header current="experiencia"/><main id="conteudo" className="section-page">
    <ExperienceSection page/>
  </main><Footer/></>;
}
