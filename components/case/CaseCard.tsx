import Link from "next/link";
import type {CaseStudy} from "@/lib/case-types";
import Icon from "@/components/Icon";
import {asset} from "@/lib/paths";

export default function CaseCard({item, compact = false}: {item: CaseStudy; compact?: boolean}) {
  return <article className={"project-card" + (compact ? " compact-project" : "")}>
    <Link className="project-card-link" href={"/projetos/" + item.slug + "/"} aria-label={"Ler o estudo de caso de " + item.name}>
      <div className="project-cover screenshot-cover">
        <div className="browser-strip" aria-hidden="true"><span/><span/><span/></div>
        <img src={asset(item.cover.src)} alt={item.cover.alt} width={item.cover.width} height={item.cover.height} loading="lazy" decoding="async"/>
      </div>
      <div className="project-info">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.name}<span className="card-arrow"><Icon name="arrow-up-right"/></span></h3>
        <p>{item.summary}</p>
        <p className="card-role">{item.role}{item.period ? " · " + item.period : ""}</p>
        <div className="project-card-bottom"><span className="status">{item.stage}</span><span className="case-label">Ler estudo de caso</span></div>
      </div>
    </Link>
  </article>;
}
