import { ADDRESS, PHYSIO_WA, PILATES_WA } from "@/lib/site";
import { WhatsAppButton } from "./Button";
import { PinIcon } from "./icons";

export function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.mapsQuery)}&output=embed`;
  return (
    <section id="contato" className="bg-brand-900 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">Agende agora</h2>
          <p className="mt-3 text-lg text-brand-100">Fale direto com a nossa equipe pelo WhatsApp.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton href={PHYSIO_WA}>Fisioterapia</WhatsAppButton>
            <WhatsAppButton href={PILATES_WA} variant="ghost">Pilates</WhatsAppButton>
          </div>
          <address className="mt-8 flex gap-3 not-italic">
            <PinIcon className="mt-1 size-5 shrink-0 text-accent-400" />
            <span>
              {ADDRESS.street}
              <br />
              {ADDRESS.area}
            </span>
          </address>
        </div>
        <iframe
          title="Mapa: ReMA Fisioterapia, Vila da Saúde"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full rounded-2xl border-0 md:h-full md:min-h-80"
        />
      </div>
    </section>
  );
}
