"use client";
import {useEffect, useRef, useState} from "react";
import type {GalleryImage} from "@/lib/case-types";
import Icon from "@/components/Icon";
import {asset} from "@/lib/paths";

// Galeria ampliável: miniaturas abrem um <dialog> com navegação por botões e pelas setas do teclado.
export default function Gallery({images, name}: {images: GalleryImage[]; name: string}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const open = (i: number) => { setIndex(i); ref.current?.showModal(); };
  const move = (d: number) => setIndex(i => (i + d + images.length) % images.length);
  useEffect(() => {
    const dlg = ref.current; if (!dlg) return;
    const onKey = (e: KeyboardEvent) => { if (!dlg.open) return; if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  const current = images[index];
  if (!current) return null;
  return <>
    <ul className="gallery-grid">{images.map((img, i) =>
      <li key={img.src + i}>
        <button type="button" className="gallery-thumb" onClick={() => open(i)} aria-label={"Ampliar imagem: " + img.alt}>
          <img src={asset(img.src)} width={img.width} height={img.height} alt="" loading="lazy" decoding="async"/>
          <span className="gallery-zoom"><Icon name="maximize" size={14}/></span>
        </button>
        <p className="gallery-caption">{img.caption}</p>
      </li>
    )}</ul>
    <dialog ref={ref} className="lightbox" aria-label={"Galeria de " + name} onClick={e => { if (e.target === ref.current) ref.current?.close(); }}>
      <div className="lightbox-inner">
        <div className="lightbox-bar">
          <span>{index + 1} de {images.length}</span>
          <button type="button" className="icon-button" onClick={() => ref.current?.close()} aria-label="Fechar galeria"><Icon name="plus" size={22} className="icon icon-close"/></button>
        </div>
        <figure className="lightbox-figure">
          <img src={asset(current.src)} width={current.width} height={current.height} alt={current.alt}/>
          <figcaption>{current.caption}</figcaption>
        </figure>
        {images.length > 1 && <div className="lightbox-nav">
          <button type="button" className="icon-button" onClick={() => move(-1)} aria-label="Imagem anterior"><Icon name="arrow-left" size={20}/></button>
          <button type="button" className="icon-button" onClick={() => move(1)} aria-label="Próxima imagem"><Icon name="arrow-right" size={20}/></button>
        </div>}
      </div>
    </dialog>
  </>;
}
