import Link from "next/link";
import type {CaseStudy} from "@/lib/case-types";
import Icon from "@/components/Icon";
import StatusTag from "@/components/case/StatusTag";
import {info, singular} from "@/lib/portfolio";
import {asset} from "@/lib/paths";

// Cartão do projeto (layout v2): tela, nome com selo de situação, frase curta e tipo · ano.
export default function CaseCard({item}: {item: CaseStudy; compact?: boolean}) {
  const i = info[item.slug];
  const tech = item.category.split(" · ").slice(1).join(" · ");
  return <article className="project-card">
    <Link className="project-card-link" href={"/projetos/" + item.slug + "/"} aria-label={"Ler o estudo de caso de " + item.name}>
      <div className="project-cover screenshot-cover">
        <div className="browser-strip" aria-hidden="true"><span/><span/><span/></div>
        <img src={asset(item.cover.src)} alt={item.cover.alt} width={item.cover.width} height={item.cover.height} loading="lazy" decoding="async"/>
      </div>
      <div className="project-info">
        <div className="card-head"><h3>{item.name}</h3><StatusTag slug={item.slug}/></div>
        <p className="card-short">{i ? i.short : item.summary}</p>
        <p className="card-meta">{i ? singular[i.kind] + " · " + i.year : item.period}{tech ? " · " + tech : ""}</p>
        <div className="project-card-bottom"><span className="case-label">Ler estudo de caso</span><span className="card-arrow"><Icon name="arrow-up-right"/></span></div>
      </div>
    </Link>
  </article>;
}
