import {Project} from "@/lib/projects";
import {asset} from "@/lib/paths";

export default function ProjectCover({project, index, detail = false}: {project: Project; index?: number; detail?: boolean}) {
  return <div className={"project-cover screenshot-cover " + project.tone + (detail ? " detail-cover" : "")}>
    <div className="browser-strip" aria-hidden="true"><span/><span/><span/></div>
    <img src={asset(project.image)} alt={project.imageAlt} width="1440" height={project.slug === "lmm" ? 720 : 1000} loading={detail ? "eager" : "lazy"}/>
    {index !== undefined && <span className="sr-only">Projeto {index + 1}</span>}
  </div>;
}
