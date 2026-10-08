import {Project} from "@/lib/projects";
import {asset} from "@/lib/paths";

export default function ProjectCover({project, index, detail = false}: {project: Project; index?: number; detail?: boolean}) {
  return <div className={"project-cover " + project.tone + (detail ? " detail-cover" : "")}>
    {project.image
      ? <img src={asset(project.image)} alt={project.imageAlt || project.name} width="1440" height="1568" loading="lazy"/>
      : <div className="cover-type"><span className="project-wordmark">{project.name}</span><span className="cover-subtitle">{project.category}</span></div>}
    {index !== undefined && <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
  </div>;
}
