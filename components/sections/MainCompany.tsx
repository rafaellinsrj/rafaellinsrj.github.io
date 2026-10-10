import Link from "next/link";
import Icon from "@/components/Icon";

// Empresa principal: Lins Capital Group e sua consultoria, Lins Partners.
export default function MainCompany({level = 3}: {level?: 2 | 3}) {
  const H = level === 2 ? "h2" : "h3";
  return <article className="main-company" aria-labelledby="empresa-principal">
    <div className="main-company-copy">
      <p className="eyebrow">Empresa principal · Fundador e CTO · desde 2026</p>
      <H id="empresa-principal" className="main-company-title">Lins Partners</H>
      <p className="main-company-parent">Uma empresa da Lins Capital Group LLC</p>
      <p>Consultoria de tecnologia que reúne auditoria de software e segurança, due diligence técnica, CTO e arquitetura sob demanda, desenvolvimento de produtos com IA, nuvem e DevOps, e equipes dedicadas de profissionais de TI.</p>
      <p>É também a casa dos produtos que construí: Hyre, The Moneta Post e a participação na Certame.</p>
      <div className="main-company-links">
        <Link href="/projetos/hyre/">Hyre <Icon name="arrow-up-right" size={14}/></Link>
        <Link href="/projetos/moneta/">The Moneta Post <Icon name="arrow-up-right" size={14}/></Link>
        <Link href="/projetos/certame/">Certame <Icon name="arrow-up-right" size={14}/></Link>
      </div>
    </div>
    <ul className="main-company-services">
      {["Auditoria de software e segurança", "Due diligence técnica", "CTO e arquitetura sob demanda", "Produtos digitais e IA", "Nuvem, infraestrutura e DevOps", "Equipes dedicadas de TI"].map(s =>
        <li key={s}><Icon name="arrow-right" size={16}/> {s}</li>)}
    </ul>
  </article>;
}
