import { FAQ } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-brand-100" />
      </div>
      <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 md:pt-24">
        <h2 className="font-display text-3xl font-bold uppercase text-brand-900 sm:text-4xl">Perguntas frequentes</h2>
        <div className="mt-8 divide-y divide-brand-100 rounded-2xl ring-1 ring-brand-100">
          {FAQ.map((item) => (
            <details key={item.q} className="group p-5 open:bg-brand-50">
              <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold marker:content-none focus-visible:outline-2 focus-visible:outline-brand-700 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-2xl text-brand-700 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
