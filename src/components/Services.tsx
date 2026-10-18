import Image from "next/image";
import { JOINTS, PHYSIO_WA, SERVICES, STEPS } from "@/lib/site";
import { WhatsAppButton } from "./Button";

export function Services() {
  return (
    <section id="fisioterapia" className="bg-brand-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-brand-900 sm:text-4xl">Como cuidamos de você</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Fisioterapia ortopédica e esportiva para quem quer voltar a treinar sem dor e sem medo.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-100">
              <span className="font-display text-3xl font-bold text-accent-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100">
              <div className="relative aspect-[4/3]">
                <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-900">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 ring-1 ring-brand-100 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-brand-900">Tratamento sem cirurgia</h3>
            <p className="mt-2 text-muted">A dor está limitando o seu treino? Protocolos não cirúrgicos para:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {JOINTS.map((j) => (
                <li key={j} className="rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-900">
                  {j}
                </li>
              ))}
            </ul>
          </div>
          <WhatsAppButton href={PHYSIO_WA} className="mt-6 md:mt-0 md:shrink-0">
            Agendar avaliação
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
