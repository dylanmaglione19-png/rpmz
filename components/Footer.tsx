import Link from 'next/link';

const categoryLinks = [
  { href: '/entretien', label: 'Entretien' },
  { href: '/tuning', label: 'Tuning' },
  { href: '/customisation', label: 'Customisation' },
];

const infoLinks = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/a-propos#disclaimer', label: 'Disclaimer affiliation' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="RPMZ — Accueil">
              <span
                className="text-2xl tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                RPM<span style={{ color: 'var(--color-accent)' }}>Z</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Tests honnêtes, sélection passion.
              <br />
              Entretien, tuning, customisation.
            </p>
          </div>

          {/* Catégories */}
          <div>
            <p className="text-label mb-4">Catégories</p>
            <ul className="flex flex-col gap-2">
              {categoryLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <p className="text-label mb-4">Informations</p>
            <ul className="flex flex-col gap-2">
              {infoLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div
          className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border-subtle)' }}
        >
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)', maxWidth: '480px' }}>
            Ce site contient des liens affiliés. Je perçois une commission sans surcoût pour vous
            lorsque vous achetez via ces liens. Cela me permet de maintenir le site et de continuer
            à tester des produits.
          </p>
          <p className="text-xs flex-shrink-0" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} rpmz.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
