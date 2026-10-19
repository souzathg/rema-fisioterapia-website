import Image from "next/image";
import { PILATES_WA } from "@/lib/site";
import { WhatsAppButton } from "./Button";
import { CheckIcon } from "./icons";

const BENEFITS = ["Condicionamento físico", "Alongamento e flexibilidade", "Fortalecimento", "Consciência corporal"];

export function Pilates() {
  return (
    <section id="pilates" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/clinic-2.jpg"
            alt="Aluna praticando Pilates no Cadillac"
            fill
            loading="eager"
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-brand-900 sm:text-4xl">Pilates clínico e funcional</h2>
          <p className="mt-3 text-lg text-muted">Aulas conduzidas por fisioterapeutas, adaptadas ao seu corpo e ao seu objetivo.</p>
          <ul className="mt-6 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3 font-medium">
                <span className="grid size-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="size-4" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <WhatsAppButton href={PILATES_WA} variant="secondary" className="mt-8">
            Agendar Pilates
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
