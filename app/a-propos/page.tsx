import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "Qui est derrière RPMZ, comment fonctionne le modèle d'affiliation, et pourquoi faire confiance aux recommandations.",
};

export default function AProposPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 pt-32 pb-20">
      <p className="text-label mb-4">Le projet</p>

      <h1
        className="mb-8"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 64px)',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
        }}
      >
        À PROPOS DE RPMZ
      </h1>

      <div className="prose-custom space-y-8">
        <section>
          <h2 className="font-bold text-base uppercase tracking-wider mb-3">
            Qui suis-je ?
          </h2>
          <p className="text-body">
            RPMZ, c&apos;est un projet lancé par un passionné d&apos;automobile. En formation
            dans le commerce auto, je combine la connaissance terrain des produits avec une
            approche honnête et directe : je ne recommande que ce que je connais ou ce que
            j&apos;ai validé techniquement.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-base uppercase tracking-wider mb-3">
            Pourquoi ce site ?
          </h2>
          <p className="text-body">
            Il existe des dizaines de sites qui listent des produits auto sans vraiment les
            connaître. RPMZ est l&apos;inverse : une sélection courte, ciblée, avec un avis
            franc sur chaque produit — ce qu&apos;il fait bien, ce qu&apos;il ne fait pas, et
            pour quel type de conducteur il est adapté.
          </p>
        </section>

        <section
          id="disclaimer"
          className="p-6 rounded-lg"
          style={{
            background: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border-default)',
          }}
        >
          <h2 className="font-bold text-base uppercase tracking-wider mb-3">
            Disclaimer — Liens affiliés
          </h2>
          <p className="text-body mb-3">
            Ce site contient des <strong style={{ color: 'var(--color-text-primary)' }}>liens affiliés</strong> vers Amazon, Oscaro et d&apos;autres
            marchands. Lorsque vous achetez un produit via un de ces liens, je perçois une
            commission, <strong style={{ color: 'var(--color-text-primary)' }}>sans surcoût pour vous</strong>.
          </p>
          <p className="text-body mb-3">
            Ce modèle me permet de maintenir le site, de tester des produits et de continuer à
            produire du contenu gratuit.
          </p>
          <p className="text-body">
            La commission ne biaise pas mes recommandations : si un produit n&apos;est pas bon,
            je le dis. L&apos;honnêteté est la seule raison pour laquelle vous avez une raison
            de revenir ici.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-base uppercase tracking-wider mb-3">
            Contact
          </h2>
          <p className="text-body">
            Pour toute question, collaboration ou suggestion de produit à tester :{' '}
            <a
              href="mailto:contact@rpmz.fr"
              className="transition-colors hover:text-white"
              style={{ color: 'var(--color-accent)' }}
            >
              contact@rpmz.fr
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
