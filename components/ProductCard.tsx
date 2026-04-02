'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  slug: string;
  name: string;
  shortName?: string;
  category: string;
  price: number;
  rating: number;
  affiliateUrl: string;
  merchant: string;
}

const categoryLabels: Record<string, string> = {
  entretien: 'Entretien',
  tuning: 'Tuning',
  customisation: 'Customisation',
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          strokeWidth={1.5}
          className={i <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-700'}
        />
      ))}
      <span className="ml-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function ProductCard({
  slug,
  name,
  shortName,
  category,
  price,
  rating,
  affiliateUrl,
  merchant,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="flex flex-col rounded-lg overflow-hidden"
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Placeholder image zone */}
      <div
        className="w-full aspect-[4/3] flex items-center justify-center px-6"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-hidden="true"
      >
        <span
          className="text-center leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 3vw, 26px)',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.04em',
          }}
        >
          {shortName ?? name}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        {/* Badge + rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-label">{categoryLabels[category] ?? category}</span>
          <Stars rating={rating} />
        </div>

        {/* Title */}
        <Link href={`/produit/${slug}`} className="group mb-3">
          <h3
            className="text-sm font-semibold leading-snug transition-colors group-hover:text-white"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {name}
          </h3>
        </Link>

        {/* Price */}
        <p
          className="text-xl font-bold mt-auto mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
        >
          {price.toFixed(2).replace('.', ',')} €
          <span className="text-xs font-normal ml-1" style={{ color: 'var(--color-text-muted)' }}>
            indicatif
          </span>
        </p>

        {/* CTA */}
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`Voir ${name} sur ${merchant}`}
          className="block w-full text-center py-2.5 px-4 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: 'var(--color-accent)',
            color: 'white',
          }}
        >
          Voir sur {merchant} →
        </a>
      </div>
    </motion.div>
  );
}
