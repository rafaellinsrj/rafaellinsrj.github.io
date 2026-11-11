import {info} from "@/lib/portfolio";

// Selo de situação do projeto (No ar, Pausado, Encerrado, Versão local, Histórico...).
export default function StatusTag({slug}: {slug: string}) {
  const i = info[slug];
  if (!i) return null;
  return <span className={"status-tag tone-" + i.tone}>{i.tone === "ok" && <span className="status-dot" aria-hidden="true"/>}{i.status}</span>;
}
