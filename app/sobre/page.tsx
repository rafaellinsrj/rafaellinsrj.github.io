import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {title: "Sobre", description: "Sobre Rafael Lins Gaspar: liderança em tecnologia, base técnica, formação e idiomas."};

export default function Page() {
  return <><Header current="sobre"/><main id="conteudo" className="section-page">
    <AboutSection page/>
  </main><Footer/></>;
}
