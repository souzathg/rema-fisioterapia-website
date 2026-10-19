"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/clinic-4.jpg", alt: "Paciente em treino funcional acompanhado por fisioterapeuta" },
  { src: "/images/clinic-3.jpg", alt: "Fisioterapeuta orientando paciente em bicicleta ergométrica" },
  { src: "/images/clinic-2.jpg", alt: "Aluna praticando Pilates no Cadillac" },
  { src: "/images/clinic-1.jpg", alt: "Paciente em sessão de recuperação com botas de compressão" },
];

const INTERVAL_MS = 5000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, index]);

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label="Fotos da clínica"
      className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl ring-1 ring-white/20 md:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          preload={i === 0}
          loading="eager"
          sizes="(min-width: 768px) 45vw, 90vw"
          aria-hidden={i !== index}
          className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Mostrar foto ${i + 1} de ${SLIDES.length}`}
            aria-current={i === index}
            className="grid size-8 place-items-center focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-white"
          >
            <span className={`block h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/50"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
