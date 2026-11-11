"use client";
import {useState, type ReactNode} from "react";
import type {Kind} from "@/lib/portfolio";

// Filtros da página Projetos: mostra só os cartões do tipo escolhido (todos ficam no HTML, para busca e leitores de tela).
export default function ProjectFilter({tabs, cards}: {tabs: {id: Kind; label: string; count: number}[]; cards: {kind: Kind; node: ReactNode; key: string}[]}) {
  const [on, setOn] = useState<Kind | "todos">("todos");
  return <>
    <div className="v2-filters" role="group" aria-label="Filtrar projetos">
      <button type="button" aria-pressed={on === "todos"} onClick={() => setOn("todos")}>Todos <span>{cards.length}</span></button>
      {tabs.map(t => <button key={t.id} type="button" aria-pressed={on === t.id} onClick={() => setOn(t.id)}>{t.label} <span>{t.count}</span></button>)}
    </div>
    <div className="project-grid v2-grid">{cards.map(c => <div key={c.key} hidden={on !== "todos" && on !== c.kind} className="v2-cell">{c.node}</div>)}</div>
  </>;
}
