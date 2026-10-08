import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCover from "@/components/ProjectCover";
import {projects} from "@/lib/projects";
import {asset} from "@/lib/paths";

type Props = {params: Promise<{slug: string}>};
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({slug: p.slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const project = projects.find(p => p.slug === slug);
  return project ? {title: project.name, description: project.description} : {};
}

export default async function ProjectPage({params}: Props) {
  const {slug} = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><Header/><main id="conteudo" className="case-page">
    <section className="container case-header">
      <Link className="back-link" href="/#projetos"><span aria-hidden="true">←</span> Todos os projetos</Link>
      <p className="eyebrow">{project.category}</p>
      <h1>{project.name}</h1>
      <p className="case-intro">{project.description}</p>
      <div className="case-actions">{project.url && <a className="button primary" href={project.url} target="_blank" rel="noreferrer">Visitar site <span aria-hidden="true">↗</span></a>}<a className="button secondary" href={asset(project.image)} target="_blank" rel="noreferrer">Ampliar tela <span aria-hidden="true">↗</span></a></div>
      <div className="case-meta"><div><span>Minha atuação</span><strong>{project.role}</strong></div><div><span>Apresentação</span><strong>{project.status}</strong></div></div>
    </section>
    <div className="container case-visual"><a className="case-image-link" href={asset(project.image)} target="_blank" rel="noreferrer" aria-label={"Ampliar tela de " + project.name}><ProjectCover project={project} detail/></a>{project.imageCaption && <p className="image-caption">{project.imageCaption}</p>}</div>
    <section className="container case-content">
      <aside className="case-sidebar"><p className="eyebrow">Tecnologias</p><ul className="tech-list">{project.tech.map(t=><li key={t}>{t}</li>)}</ul></aside>
      <div className="case-main">
        <section><p className="eyebrow">01 / Contexto</p><h2>O produto e o desafio</h2><p>{project.context}</p></section>
        <section><p className="eyebrow">02 / Implementação</p><h2>O trabalho no projeto</h2><div className="contribution-list">{project.contributions.map((c,i)=><article key={c.title}><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span><div><h3>{c.title}</h3><p>{c.text}</p></div></article>)}</div></section>
        <section><p className="eyebrow">03 / Escolhas técnicas</p><h2>Decisões de desenvolvimento</h2><ul className="decisions-list">{project.decisions.map(d=><li key={d}>{d}</li>)}</ul></section>
        <section className="stage-note"><p className="eyebrow">Situação do projeto</p><p>{project.stage}</p></section>
      </div>
    </section>
    <section className="container next-project"><div><p className="eyebrow">Continue explorando</p><Link href={"/projetos/"+next.slug+"/"}>{next.name} <span aria-hidden="true">↗</span></Link></div><Link className="text-link" href="/#contato">Conversar sobre um projeto</Link></section>
  </main><Footer/></>;
}
