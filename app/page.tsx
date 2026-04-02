import Link from 'next/link';
import { Search, MessageSquare, Target } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import categories from '@/data/categories.json';
import products from '@/data/products.json';

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20 overflow-hidden dot-grid"
        aria-label="Bannière principale"
      >
        {/* Radial glow bottom-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[60vw] h-[60vh]"
          style={{
            background:
              'radial-gradient(ellipse at 80% 100%, rgba(230,51,41,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-label mb-6">Sélection passion — Zéro compromis</p>

          <h1 className="text-display mb-6">
            L&apos;équipement
            <br />
            qui fait la{' '}
            <span style={{ color: 'var(--color-accent)' }}>différence</span>
          </h1>

          <p
            className="text-body max-w-xl mx-auto mb-10 text-base md:text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Tests honnêtes, sélection passion. Entretien, tuning, customisation —
            chaque produit recommandé est un produit qu&apos;on connaît.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tuning"
              className="px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'var(--color-accent)', color: 'white' }}
            >
              Voir les sélections →
            </Link>
            <Link
              href="#categories"
              className="px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-white/10"
              style={{
                border: '1px solid var(--color-border-default)',
                color: 'var(--color-text-primary)',
              }}
            >
              Toutes les catégories
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <div
            className="w-px h-8 animate-pulse"
            style={{ background: 'var(--color-text-muted)' }}
          />
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ── CATÉGORIES ─────────────────────────────────────── */}
      <section
        id="categories"
        className="px-4 py-20"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-label="Catégories"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-label mb-2 text-center">Explorer par univers</p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '0.02em',
            }}
          >
            CHOISISSEZ VOTRE UNIVERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                slug={cat.slug}
                name={cat.name}
                description={cat.description}
                icon={cat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUITS VEDETTES ──────────────────────────────── */}
      <section className="px-4 py-20" aria-label="Produits vedettes">
        <div className="max-w-6xl mx-auto">
          <p className="text-label mb-2 text-center">Top sélections</p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '0.02em',
            }}
          >
            NOS COUPS DE CŒUR
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                name={product.name}
                shortName={product.shortName}
                category={product.category}
                price={product.price}
                rating={product.rating}
                affiliateUrl={product.affiliateUrl}
                merchant={product.merchant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI RPMZ ──────────────────────────────────── */}
      <section
        className="px-4 py-20"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-label="Pourquoi RPMZ"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-label mb-2 text-center">Notre approche</p>
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '0.02em',
            }}
          >
            POURQUOI RPMZ ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Search,
                title: 'Sélection testée',
                body: "On ne recommande que ce qu'on connaît. Chaque produit de la sélection a été utilisé, évalué ou validé techniquement avant d'être mis en avant.",
              },
              {
                Icon: MessageSquare,
                title: 'Avis honnêtes',
                body: "Le bon et le moins bon, sans filtre. Si un produit a des défauts, on le dit. La confiance vaut plus qu'une vente.",
              },
              {
                Icon: Target,
                title: 'Pour les passionnés',
                body: 'Entretien sérieux ou tuning poussé, on couvre tout. Pas de contenu générique — des recommandations précises pour les vrais utilisateurs.',
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col items-start">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-5"
                  style={{ background: 'rgba(230,51,41,0.1)', color: 'var(--color-accent)' }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-base mb-2 uppercase tracking-wide">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
