import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL, REVIEWS } from "@/lib/site";
import { GoogleIcon, StarIcon } from "./icons";

function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${rating} de 5 estrelas`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} className={`size-5 ${n <= rating ? "text-accent-400" : "text-brand-100"}`} />
      ))}
    </span>
  );
}

export function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section id="avaliacoes" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-brand-900 sm:text-4xl">Avaliações</h2>
        <p className="mt-2 flex items-center gap-2 text-lg text-muted">
          <strong className="text-brand-900">{GOOGLE_RATING.toFixed(1).replace(".", ",")}/5</strong>
          <Stars rating={GOOGLE_RATING} />
          <span className="inline-flex items-center gap-1.5">
            no <GoogleIcon className="size-5" /> Google ({GOOGLE_REVIEW_COUNT} avaliações)
          </span>
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li key={`${review.author}-${review.date}`} className="flex flex-col rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
              <Stars rating={review.rating} />
              <blockquote className="mt-3 flex-1 text-muted">“{review.text}”</blockquote>
              <p className="mt-4 font-semibold text-brand-900">{review.author}</p>
              <p className="text-sm text-muted">{review.date}</p>
            </li>
          ))}
        </ul>
        {GOOGLE_REVIEWS_URL && (
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-brand-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-900"
          >
            Ver todas no Google
          </a>
        )}
      </div>
    </section>
  );
}
