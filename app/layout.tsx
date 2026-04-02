import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RPMZ — Entretien, Tuning & Customisation Auto',
    template: '%s | RPMZ',
  },
  description:
    "Tests honnêtes et sélection passion pour l'équipement auto. Entretien, tuning, customisation — trouvez les meilleurs produits.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rpmz.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rpmz.fr',
    siteName: 'RPMZ',
    title: 'RPMZ — Entretien, Tuning & Customisation Auto',
    description:
      "Tests honnêtes et sélection passion pour l'équipement auto.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RPMZ — Entretien, Tuning & Customisation Auto',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
