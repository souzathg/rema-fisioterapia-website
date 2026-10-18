import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-accent-400 text-brand-900 hover:bg-accent-500 focus-visible:outline-brand-900",
  secondary: "bg-brand-700 text-white hover:bg-brand-900 focus-visible:outline-brand-900",
  ghost: "bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20 focus-visible:outline-white",
};

export function WhatsAppButton({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {children}
    </a>
  );
}
