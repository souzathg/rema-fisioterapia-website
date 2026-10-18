"use client";

import { useEffect, useRef, useState } from "react";
import { PHYSIO_WA, PILATES_WA } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const OPTIONS = [
  { label: "Fisioterapia", href: PHYSIO_WA },
  { label: "Pilates", href: PILATES_WA },
];

export function StickyWhatsApp() {
  const [open, setOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      // Same margin as Header: anchor jumps park the hero's last pixels under
      // the fixed header (scroll-padding-top is 48px), which still counts as visible.
      { rootMargin: "-96px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      inert={heroVisible}
      className={`fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        heroVisible ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {open && (
        <div role="menu" aria-label="Escolha o atendimento" className="w-56 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-brand-100">
          <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-muted">Agendar</p>
          {OPTIONS.map((o) => (
            <a
              key={o.label}
              role="menuitem"
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center gap-3 rounded-xl px-3 font-semibold text-brand-900 transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-700"
            >
              <WhatsAppIcon className="size-5 shrink-0 text-[#25d366]" />
              {o.label}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        aria-label="Agendar pelo WhatsApp"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex min-h-14 items-center rounded-full bg-[#25d366] px-5 font-semibold text-brand-900 shadow-lg transition-transform hover:scale-105 focus-visible:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-900"
      >
        <WhatsAppIcon className="size-6 shrink-0" />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-24 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-24 group-focus-visible:opacity-100 ${
            open ? "ml-2 max-w-24 opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          Agendar
        </span>
      </button>
    </div>
  );
}
