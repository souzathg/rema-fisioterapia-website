import { PHYSIO_WA } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function StickyWhatsApp() {
  return (
    <a
      href={PHYSIO_WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25d366] px-5 font-semibold text-brand-900 shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-900"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">Agendar</span>
    </a>
  );
}
