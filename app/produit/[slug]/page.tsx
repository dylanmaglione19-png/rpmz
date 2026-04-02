import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, ArrowLeft, AlertCircle } from 'lucide-react';
import products from '@/data/products.json';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description.slice(0, 155),
  };
}

const categoryLabels: Record<string, string> = {
  entretien: 'Entretien',
  tuning: 'Tuning',
  customisation: 'Customisation',
};

function StarRow({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={16}
            strokeWidth={1.5}
            className={i <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-700'}
          />
        ))}
      </div>
      <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
      <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
        ({count.toLocaleString('fr-FR')} avis)
      </span>
    </div>
  );
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const categoryHref = `/${product.category}`;
  const categoryLabel = categoryLabels[product.category] ?? product.category;

  return (
    <article className="max-w-3xl mx-auto px-4 pt-32 pb-20">
      {/* Back */}
      <Link
        href={categoryHref}
        className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <ArrowLeft size={14} />
        Retour {categoryLabel}
      </Link>

      {/* Badge + rating */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="text-label">{categoryLabel}</span>
        <StarRow rating={product.rating} count={product.reviewCount} />
      </div>

      {/* Title */}
      <h1
        className="mb-4"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(30px, 5vw, 56px)',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}
      >
        {product.name.toUpperCase()}
      </h1>

      {/* For who */}
      <p className="text-sm mb-8 px-4 py-3 rounded-md" style={{ background: 'var(--color-bg-elevated)', color: 'var(--color-text-secondary)', borderLeft: '3px solid var(--color-accent)' }}>
        <strong style={{ color: 'var(--color-text-primary)' }}>Pour qui :</strong>{' '}
        {product.forWho}
      </p>

      <div
        className="h-px mb-8"
        style={{ background: 'var(--color-border-subtle)' }}
        aria-hidden="true"
      />

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-label mb-3">Ce que ça fait</h2>
        <p className="text-body">{product.description}</p>
      </div>

      {/* What it doesn't do */}
      <div
        className="flex gap-3 p-4 rounded-md mb-8"
        style={{ background: 'rgba(230,51,41,0.06)', border: '1px solid rgba(230,51,41,0.2)' }}
      >
        <AlertCircle
          size={18}
          className="flex-shrink-0 mt-0.5"
          style={{ color: 'var(--color-accent)' }}
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>
            Ce que ça ne fait pas
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {product.notFor}
          </p>
        </div>
      </div>

      {/* Quote review */}
      <blockquote
        className="relative px-6 py-5 rounded-md mb-10"
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border-default)',
          borderLeft: '4px solid var(--color-accent)',
        }}
      >
        <p
          className="text-base leading-relaxed italic"
          style={{ color: 'var(--color-text-primary)' }}
        >
          &ldquo;{product.review}&rdquo;
        </p>
        <footer className="mt-3 text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
          — Mon avis, RPMZ
        </footer>
      </blockquote>

      {/* Price + CTA */}
      <div
        className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-lg"
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border-default)',
        }}
      >
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-text-muted)' }}>
            Prix indicatif
          </p>
          <p
            className="text-4xl font-bold"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
          >
            {product.price.toFixed(2).replace('.', ',')} €
          </p>
        </div>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`Voir ${product.name} sur ${product.merchant}`}
          className="flex-shrink-0 px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider text-center transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ background: 'var(--color-accent)', color: 'white' }}
        >
          Voir sur {product.merchant} →
        </a>
      </div>

      {/* Disclaimer inline */}
      <p
        className="mt-4 text-xs leading-relaxed text-center"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Lien affilié — je perçois une petite commission sans surcoût pour vous si vous achetez via
        ce lien. Cela ne biaise pas mon avis.
      </p>
    </article>
  );
}
