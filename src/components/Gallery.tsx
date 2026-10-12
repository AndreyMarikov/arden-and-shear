"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = { src: string; alt: string; ratio: string };

// Hides the page scrollbar while the viewer is open. The scrollbar's width is measured first and re-added as padding
// (see `html.lb-open` in globals.css), so the page behind the backdrop doesn't shift sideways.
const setScrollLock = (on: boolean) => {
  const root = document.documentElement;
  if (on) root.style.setProperty("--sbw", `${window.innerWidth - root.clientWidth}px`);
  else root.style.removeProperty("--sbw");
  root.classList.toggle("lb-open", on);
};

const DECELERATION = 0.998; // Apple's scroll-feel constant, used to project a flick's resting point

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState<number | null>(null);
  const track = useRef({ startX: 0, lastX: 0, lastT: 0, velocity: 0 });
  const n = items.length;

  const step = useCallback((d: number) => setIndex((i) => (i + d + n) % n), [n]);
  const close = () => dialogRef.current?.close();
  const open = (i: number) => { setIndex(i); setScrollLock(true); dialogRef.current?.showModal(); };

  // Safety net: never leave the page locked if the gallery unmounts while open.
  useEffect(() => () => { setScrollLock(false); }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    track.current = { startX: e.clientX, lastX: e.clientX, lastT: e.timeStamp, velocity: 0 };
    setDragX(0);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragX === null) return;
    const t = track.current, dt = Math.max(e.timeStamp - t.lastT, 1);
    t.velocity = ((e.clientX - t.lastX) / dt) * 1000; // px/s
    t.lastX = e.clientX; t.lastT = e.timeStamp;
    setDragX(e.clientX - t.startX); // 1:1 with the pointer
  };
  const onPointerUp = () => {
    if (dragX === null) return;
    const projected = dragX + (track.current.velocity / 1000) * (DECELERATION / (1 - DECELERATION));
    if (Math.abs(projected) > 140) step(projected < 0 ? 1 : -1);
    setDragX(null);
  };

  const current = items[index];
  return (
    <>
      <ul className="gallery-grid">
        {items.map((item, i) => (
          <li key={item.src} className="reveal">
            <button type="button" className="gallery-tile" style={{ aspectRatio: item.ratio }} onClick={() => open(i)} aria-label={`Open photo ${i + 1} of ${n}: ${item.alt}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setScrollLock(false)}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <div className="lb-stage" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div
            className="lb-frame"
            data-dragging={dragX !== null}
            style={{ transform: `translateX(${dragX ?? 0}px)` }}
            onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
          >
            {current && <Image key={current.src} src={current.src} alt={current.alt} fill sizes="92vw" draggable={false} />}
          </div>
          <p className="lb-caption"><span>{index + 1} / {n}</span> {current?.alt}</p>
          <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close photo viewer"><X size={22} strokeWidth={1.75} aria-hidden="true" /></button>
          {n > 1 && (
            <>
              <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo"><ChevronLeft size={24} strokeWidth={1.75} aria-hidden="true" /></button>
              <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo"><ChevronRight size={24} strokeWidth={1.75} aria-hidden="true" /></button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
