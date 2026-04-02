'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/entretien', label: 'Entretien' },
  { href: '/tuning', label: 'Tuning' },
  { href: '/customisation', label: 'Customisation' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="w-full max-w-4xl flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,10,11,0.85)'
            : 'rgba(10,10,11,0.6)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        }}
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="RPMZ — Accueil">
          <span
            className="text-xl tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            RPM<span style={{ color: 'var(--color-accent)' }}>Z</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
                  style={{
                    color: active
                      ? 'var(--color-text-primary)'
                      : 'var(--color-text-secondary)',
                    background: active ? 'var(--color-bg-elevated)' : 'transparent',
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 rounded-md transition-colors"
          style={{ color: 'var(--color-text-secondary)' }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-20 left-4 right-4 rounded-2xl p-4 flex flex-col gap-1 md:hidden"
            style={{
              background: 'rgba(17,17,19,0.97)',
              border: '1px solid var(--color-border-default)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  color: pathname.startsWith(href)
                    ? 'var(--color-accent)'
                    : 'var(--color-text-primary)',
                  background: pathname.startsWith(href)
                    ? 'rgba(230,51,41,0.08)'
                    : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
