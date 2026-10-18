import Image from "next/image";

export function About() {
  return (
    <section id="quem-somos" className="bg-brand-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[320px_1fr]">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl md:max-w-none">
          <Image src="/images/rafael.jpg" alt="Dr. Rafael Shiroma, fisioterapeuta e fundador da ReMA" fill sizes="320px" className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-brand-900 sm:text-4xl">Quem somos</h2>
          <p className="mt-2 text-xl font-semibold text-brand-700">Dr. Rafael Shiroma · Fundador</p>
          <div className="mt-4 space-y-4 text-lg text-muted">
            <p>Fisioterapeuta formado pelo Centro Universitário São Camilo, com especialização em Fisioterapia Musculoesquelética pela Santa Casa de SP.</p>
            <p>Mais de 10 anos de experiência em reabilitação pós-cirúrgica e esportiva, além de ministrar cursos para estudantes e profissionais de fisioterapia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
