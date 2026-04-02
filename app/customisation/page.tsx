import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';
import categories from '@/data/categories.json';

export const metadata: Metadata = {
  title: 'Customisation Auto',
  description:
    'Volants, LED, tapis, styling intérieur et extérieur — customisez votre auto avec des produits sélectionnés.',
};

export default function CustomisationPage() {
  const category = categories.find((c) => c.slug === 'customisation')!;
  const filtered = products.filter((p) => p.category === 'customisation');

  return (
    <>
      <section
        className="px-4 pt-36 pb-16 relative overflow-hidden"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(168,85,247,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-label mb-3">{category.name}</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 7vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            {category.name.toUpperCase()}
          </h1>
          <p
            className="mt-4 text-base leading-relaxed max-w-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {category.longDescription}
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center" style={{ color: 'var(--color-text-muted)' }}>
              Fiches en cours de rédaction — revenez bientôt.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product) => (
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
          )}
        </div>
      </section>
    </>
  );
}
