import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationsSection from "@/components/sections/CertificationsSection";

export const metadata: Metadata = {title: "Certificações", description: "Certificações e cursos de Rafael Lins Gaspar: Oracle Cloud Infrastructure, Fortinet NSE 3, Microsoft Applied Skills, Databricks, AWS Educate e formação complementar, com links de verificação."};

export default function Page() {
  return <><Header current="certificacoes"/><main id="conteudo" className="section-page">
    <CertificationsSection/>
  </main><Footer/></>;
}
