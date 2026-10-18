import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReMA | fisioterapia",
  description:
    "Fisioterapia ortopédica, esportiva e studio de Pilates na Vila da Saúde, São Paulo. " +
    "Trate sua lesão e retorne aos treinos com acompanhamento profissional.",
  openGraph: {
    title: "ReMA Fisioterapia",
    description: "Fisioterapia ortopédica e esportiva e Pilates na Vila da Saúde, São Paulo.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/clinic-4.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#0b3f3c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${barlow.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
