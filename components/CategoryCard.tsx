'use client';

import Link from 'next/link';
import { Wrench, Gauge, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Gauge,
  Palette,
};

interface CategoryCardProps {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export default function CategoryCard({ slug, name, description, icon }: CategoryCardProps) {
  const Icon = iconMap[icon] ?? Wrench;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Link
        href={`/${slug}`}
        className="group flex flex-col h-full p-6 rounded-lg transition-all duration-300"
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: 'var(--shadow-card)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = 'var(--color-accent)';
          el.style.boxShadow = 'var(--shadow-glow)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = 'var(--color-border-subtle)';
          el.style.boxShadow = 'var(--shadow-card)';
        }}
        aria-label={`Voir la catégorie ${name}`}
      >
        <div
          className="w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-colors duration-300"
          style={{
            background: 'rgba(230,51,41,0.1)',
            color: 'var(--color-accent)',
          }}
        >
          <Icon size={22} strokeWidth={1.5} />
        </div>

        <h3
          className="font-bold mb-2 uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.04em' }}
        >
          {name}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>

        <span
          className="mt-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 group-hover:text-accent-hover"
          style={{ color: 'var(--color-accent)' }}
        >
          Voir la sélection →
        </span>
      </Link>
    </motion.div>
  );
}
