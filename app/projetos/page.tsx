import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {title: "Projetos", description: "Vinte estudos de caso técnicos com arquitetura, decisões, resultados e limites de cada projeto."};

export default function Page() {
  return <><Header current="projetos"/><main id="conteudo" className="section-page">
    <ProjectsSection page/>
  </main><Footer/></>;
}
