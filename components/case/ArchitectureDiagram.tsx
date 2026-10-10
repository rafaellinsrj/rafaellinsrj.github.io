import type {Diagram} from "@/lib/case-types";
import Icon from "@/components/Icon";

// Diagrama em HTML/CSS (equivalente editável a um SVG): camadas de cima para baixo, blocos em cada camada.
// A descrição das conexões fica em texto, ligada ao diagrama por aria-describedby.
export default function ArchitectureDiagram({diagram, id, proposal = false}: {diagram: Diagram; id: string; proposal?: boolean}) {
  return <figure className={"arch" + (proposal ? " arch-proposal" : "")} aria-labelledby={id + "-title"} aria-describedby={id + "-desc"}>
    <figcaption id={id + "-title"} className="arch-title">{diagram.title}</figcaption>
    <ol className="arch-tiers">{diagram.tiers.map((tier, i) =>
      <li key={tier.label} className="arch-tier">
        <span className="arch-label">{tier.label}</span>
        <ul className="arch-nodes">{tier.nodes.map(n => <li key={n}>{n}</li>)}</ul>
        {i < diagram.tiers.length - 1 && <span className="arch-arrow"><Icon name="arrow-down" size={16}/></span>}
      </li>
    )}</ol>
    <div id={id + "-desc"} className="arch-links"><p className="arch-links-title">Conexões</p><ul>{diagram.links.map(l => <li key={l}>{l}</li>)}</ul></div>
  </figure>;
}
