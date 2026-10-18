"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "@/lib/site";

export function Header() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      // Must exceed `scroll-padding-top` (3rem = 48px) in globals.css, otherwise
      // anchor jumps stop with the hero's last pixels still under the threshold.
      // (rootMargin only accepts px or %, not rem.)
      { rootMargin: "-96px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur transition-colors duration-300 ${
        heroVisible ? "border-transparent bg-brand-900" : "border-brand-100 bg-white/90"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 ${
          heroVisible ? "hidden h-12 lg:flex" : "flex h-16"
        }`}
      >
        {/* in-hero: lean bar, desktop only; mobile keeps just the nav strip below */}
        <a
          href="#inicio"
          aria-label="ReMA Fisioterapia - início"
          tabIndex={heroVisible ? -1 : undefined}
          aria-hidden={heroVisible || undefined}
          className={`transition-opacity duration-300 ${heroVisible ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
          <Image src="/images/logo-color.png" alt="ReMA | fisioterapia" width={120} height={49} priority className="h-9 w-auto" />
        </a>
        <nav aria-label="Principal" className={`hidden items-center gap-6 lg:flex ${heroVisible ? "ml-auto" : ""}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={`text-sm font-medium transition-colors ${heroVisible ? "text-brand-100 hover:text-white" : "text-muted hover:text-brand-700"}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      {/* Mobile nav: horizontally scrollable, no JS needed */}
      <nav aria-label="Principal (mobile)" className={`flex gap-5 overflow-x-auto px-4 py-2 lg:hidden ${heroVisible ? "" : "border-t border-brand-100"}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className={`whitespace-nowrap py-1 text-sm font-medium ${heroVisible ? "text-brand-100 hover:text-white" : "text-muted hover:text-brand-700"}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
