"use client";
import {useEffect, useRef, useState} from "react";
import Icon from "@/components/Icon";
import {asset} from "@/lib/paths";
import {certificationGroups, issuers, type Certification} from "@/lib/certifications";

const all = certificationGroups.flatMap(g => g.items);

// Grade de certificações agrupadas; a imagem abre um <dialog> ampliado com navegação pelas setas.
export default function CertificationsSection() {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const open = (c: Certification) => { setIndex(all.indexOf(c)); ref.current?.showModal(); };
  const move = (d: number) => setIndex(i => (i + d + all.length) % all.length);
  useEffect(() => {
    const dlg = ref.current; if (!dlg) return;
    const onKey = (e: KeyboardEvent) => { if (!dlg.open) return; if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  const current = all[index];
  const total = all.length, links = all.filter(c => c.verifyUrl).length;

  return <section id="certificacoes" className="section container">
    <div className="section-heading"><div><p className="eyebrow">Certificações</p><h1 className="section-h1">Aprendizado<br/><span>contínuo.</span></h1></div>
      <p>{total} certificados e credenciais, com nuvem, dados e IA em primeiro lugar. Clique na imagem para ampliar; quando houver, o botão Verificar abre a página oficial do emissor.</p></div>
    {certificationGroups.map(g => <div key={g.id} className="cert-group" id={g.id}>
      <div className="cert-group-head"><h2>{g.title}</h2><p>{g.description}</p><span className="cert-count">{g.items.length}</span></div>
      <ul className="cert-grid">{g.items.map(c => {
        const issuer = issuers[c.issuer];
        return <li key={c.id} className="cert-card">
          <button type="button" className={"cert-thumb" + (c.image.badge ? " is-badge" : "")} onClick={() => open(c)} aria-label={"Ampliar certificado: " + c.name}>
            <img src={asset(c.image.thumb)} width={c.image.width} height={c.image.height} alt="" loading="lazy" decoding="async"/>
            <span className="gallery-zoom"><Icon name="maximize" size={14}/></span>
          </button>
          <div className="cert-body">
            <p className="cert-issuer"><span className="cert-logo"><img src={asset(issuer.logo)} width={issuer.logoWidth} height={96} alt={issuer.name}/></span><span className="sr-only">Emissor: </span>{issuer.name}</p>
            <h3>{c.name}</h3>
            <p className="cert-meta"><span>{c.kind}</span><time dateTime={c.dateIso}>{c.date}</time></p>
            {c.detail && <p className="cert-detail">{c.detail}</p>}
            {c.verifyUrl
              ? <a className="button secondary cert-verify" href={c.verifyUrl} target="_blank" rel="noopener noreferrer">Verificar <Icon name="external-link" size={16}/><span className="sr-only"> (abre em nova aba)</span></a>
              : <p className="cert-noverify">Certificado em arquivo</p>}
          </div>
        </li>;
      })}</ul>
    </div>)}
    <dialog ref={ref} className="lightbox" aria-label="Certificado ampliado" onClick={e => { if (e.target === ref.current) ref.current?.close(); }}>
      {current && <div className="lightbox-inner">
        <div className="lightbox-bar">
          <span>{index + 1} de {total}</span>
          <button type="button" className="icon-button" onClick={() => ref.current?.close()} aria-label="Fechar"><Icon name="plus" size={22} className="icon icon-close"/></button>
        </div>
        <figure className="lightbox-figure">
          <img className={current.image.badge ? "cert-lightbox-badge" : undefined} src={asset(current.image.full)} width={current.image.width} height={current.image.height} alt={"Certificado: " + current.name + ", " + issuers[current.issuer].name}/>
          <figcaption>{current.name} · {issuers[current.issuer].name} · {current.date}</figcaption>
        </figure>
        <div className="lightbox-nav">
          <button type="button" className="icon-button" onClick={() => move(-1)} aria-label="Certificado anterior"><Icon name="arrow-left" size={20}/></button>
          {current.verifyUrl && <a className="button secondary" href={current.verifyUrl} target="_blank" rel="noopener noreferrer">Verificar <Icon name="external-link" size={16}/></a>}
          <button type="button" className="icon-button" onClick={() => move(1)} aria-label="Próximo certificado"><Icon name="arrow-right" size={20}/></button>
        </div>
      </div>}
    </dialog>
    {links < total && <p className="cert-note">Certificados sem botão Verificar ainda não têm página pública de verificação do emissor; a imagem é a do documento original.</p>}
  </section>;
}
