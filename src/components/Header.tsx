"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { NAV } from "@/lib/site";

/** Nav links with a bar that slides under the link of the section being viewed. */
function NavLinks({
  active,
  heroVisible,
  label,
  className,
  linkClassName,
  scrollable = false,
}: {
  active: string | null;
  heroVisible: boolean;
  label: string;
  className: string;
  linkClassName: string;
  scrollable?: boolean;
}) {
  const navRef = useRef<HTMLElement>(null);
  const [bar, setBar] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>(`a[href="${active}"]`);
    if (!nav || !link) {
      setBar(null);
      return;
    }
    const measure = () => setBar({ left: link.offsetLeft, width: link.offsetWidth });
    measure();
    if (scrollable) {
      nav.scrollTo({ left: link.offsetLeft - 16, behavior: "smooth" });
    }
    // One of the two navs is display:none at any width (offsets read 0); the resize listener re-measures when it appears.
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, scrollable]);

  return (
    <nav ref={navRef} aria-label={label} className={`relative ${className}`}>
      {NAV.map((item) => {
        const isActive = item.href === active;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={`${linkClassName} ${
              isActive ? (heroVisible ? "text-white" : "text-brand-700") : heroVisible ? "text-brand-100 hover:text-white" : "text-muted hover:text-brand-700"
            }`}
          >
            {item.label}
          </a>
        );
      })}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-accent-400 transition-[transform,width,opacity] duration-300 ease-out ${
          bar ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: bar?.width ?? 0, transform: `translateX(${bar?.left ?? 0}px)` }}
      />
    </nav>
  );
}

export function Header() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.href.slice(1))).filter((el): el is HTMLElement => !!el);
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.documentElement;
      // The last section can be too short to reach the trigger line, so the page bottom counts as it.
      const atBottom = window.scrollY + window.innerHeight >= root.scrollHeight - 2;
      // Current section = the last one whose top has passed a line ~35% down the viewport.
      const line = window.innerHeight * 0.35;
      const current = atBottom ? sections.at(-1) : sections.findLast((el) => el.getBoundingClientRect().top <= line);
      setActive(current ? `#${current.id}` : null);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
        className={`mx-auto max-w-6xl items-center justify-center gap-4 lg:justify-between px-4 sm:px-6 ${
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
          <Image src="/images/logo-color-without-slogan.png" alt="ReMA | fisioterapia" width={120} height={49} priority className="h-9 w-auto" />
        </a>
        <NavLinks
          active={active}
          heroVisible={heroVisible}
          label="Principal"
          className={`hidden items-center gap-6 pb-1 lg:flex ${heroVisible ? "ml-auto" : ""}`}
          linkClassName="text-sm font-medium transition-colors"
        />
      </div>
      {/* Mobile nav: horizontally scrollable, no JS needed */}
      <NavLinks
        active={active}
        heroVisible={heroVisible}
        label="Principal (mobile)"
        scrollable
        className={`flex gap-5 overflow-x-auto px-4 pb-1 pt-2 lg:hidden ${heroVisible ? "" : "border-t border-brand-100"}`}
        linkClassName="whitespace-nowrap py-1 text-sm font-medium transition-colors"
      />
    </header>
  );
}
