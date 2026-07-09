'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = LINKS.map(l => l.href.slice(1));
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) { setActive('#' + id); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className={`container mx-auto max-w-7xl px-6 flex items-center justify-between ${scrolled ? 'glass rounded-full py-2 px-3 md:px-6' : ''}`}>
          <a href="#home" className="flex items-center gap-2 group" data-cursor="view" data-label="Home">
            <span className="font-display text-2xl font-bold tracking-tighter">VP</span>
            <span className="hidden md:inline text-xs text-muted-foreground font-mono uppercase tracking-widest">/ Vikas Pondric</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${active === l.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {active === l.href && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-foreground/10" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-105 transition"
            >
              <motion.div key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all">
              Let's Talk
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            </a>
            <button className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col">
            <div className="flex justify-between items-center p-6">
              <span className="font-display text-2xl font-bold">VP</span>
              <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full glass flex items-center justify-center"><X size={18} /></button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {LINKS.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.06 }}
                  className="font-display text-5xl font-semibold tracking-tighter hover:text-accent transition">
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
