'use client';
import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  const socials = [
    { icon: Linkedin, href: '#' }, { icon: Github, href: '#' },
    { icon: Instagram, href: '#' }, { icon: Mail, href: 'mailto:hello@vikaspondric.dev' },
  ];

  return (
    <footer className="relative pt-24 pb-10 border-t border-border/60">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">— Let's build something legendary</p>
            <h3 className="font-display text-[18vw] md:text-[10vw] leading-[0.85] font-bold tracking-tighter">
              <span className="gradient-text">Vikas</span><br/>
              <span className="font-serif-italic font-normal text-muted-foreground">Pondric</span>
            </h3>
          </div>
          <div className="md:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Say hi</p>
              <a href="mailto:hello@vikaspondric.dev" className="font-display text-2xl md:text-3xl font-semibold link-underline">hello@vikaspondric.dev</a>
            </div>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition"><s.icon size={16}/></a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <p>© 2025 Vikas Pondric — Crafted with obsession in India.</p>
          <div className="flex gap-6">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
            <a href="#" className="link-underline">Colophon</a>
          </div>
        </div>
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground shadow-lg transition-all ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
        aria-label="Back to top">
        <ArrowUp size={18}/>
      </button>
    </footer>
  );
}
