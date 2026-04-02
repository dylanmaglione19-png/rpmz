import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-label mb-4">Erreur 404</p>
      <h1
        className="mb-4"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 12vw, 140px)',
          lineHeight: 1,
          color: 'var(--color-text-muted)',
        }}
      >
        404
      </h1>
      <p className="text-body mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:opacity-90"
        style={{ background: 'var(--color-accent)', color: 'white' }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
