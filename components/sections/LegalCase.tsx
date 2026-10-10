import Icon from "@/components/Icon";

// Caso executivo do setor jurídico: só texto e indicadores, sem identificar a organização.
export default function LegalCase({level = 3}: {level?: 2 | 3}) {
  const H = level === 2 ? "h2" : "h3";
  return <>
    <article className="legal-case" aria-labelledby="caso-juridico">
      <div className="legal-copy">
        <p className="eyebrow">CTO · Setor jurídico · 2021 – 2024</p>
        <H id="caso-juridico" className="legal-title">Tecnologia apoiando a expansão de 400 para 17 mil clientes.</H>
        <p>Atuei como Chief Technology Officer em um escritório de advocacia em fase de expansão. Durante minha atuação, a base passou de aproximadamente 400 para 17 mil clientes, em um processo de crescimento apoiado por tecnologia. Liderei diretamente uma equipe de cinco desenvolvedores, em uma organização com mais de 25 colaboradores, alinhando o desenvolvimento às necessidades da operação.</p>
        <p className="legal-note">Identidade da organização preservada por confidencialidade.</p>
      </div>
      <dl className="legal-metrics">
        <div><dt><Icon name="trending-up" size={18}/> Base de clientes</dt><dd>~400 <Icon name="arrow-right" size={18}/> 17 mil</dd></div>
        <div><dt><Icon name="users" size={18}/> Liderança direta</dt><dd>5 desenvolvedores</dd></div>
        <div><dt><Icon name="building" size={18}/> Organização</dt><dd>25+ colaboradores</dd></div>
      </dl>
    </article>
  </>;
}
