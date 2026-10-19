import Image from "next/image";
import { PHYSIO_WA, PILATES_WA } from "@/lib/site";
import { WhatsAppButton } from "./Button";
import { HeroSlideshow } from "./HeroSlideshow";
import { ChevronDownIcon } from "./icons";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden bg-brand-900 pb-16 pt-11 text-white lg:pt-12">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-4 py-10 lg:py-10 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <div className="w-fit rounded-xl pb-5 lg:pb-10">
            <Image src="/images/logo-color.png" alt="ReMA | fisioterapia" width={400} height={162} preload className="h-24 w-auto sm:h-28" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-accent-400">
            Fisioterapia Ortopédica e Esportiva · Studio de Pilates
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Trate a sua lesão e retorne aos seus treinos
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-100">
            Programa contínuo com acompanhamento profissional, da avaliação inicial até a alta e o retorno ao esporte.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton href={PHYSIO_WA}>Agendar Fisioterapia</WhatsAppButton>
            <WhatsAppButton href={PILATES_WA} variant="ghost">
              Agendar Pilates
            </WhatsAppButton>
          </div>
          <p className="mt-4 text-sm text-brand-100/80">Vila da Saúde, São Paulo · Resposta pelo WhatsApp</p>
        </div>
        <HeroSlideshow />
      </div>
      <a
        href="#fisioterapia"
        aria-label="Saiba mais"
        className="absolute inset-x-0 bottom-3 mx-auto w-fit text-brand-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <ChevronDownIcon className="size-8 animate-bounce" />
      </a>
    </section>
  );
}
