'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const PROJECTS = [
  { title: 'Nebula Dashboard', cat: 'Web App', year: '2025', tech: ['Next.js', 'Tailwind', 'GSAP'], desc: 'Analytics dashboard for a fintech startup with a bespoke dark UI system.', img: 'https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Aurum Studio', cat: 'Portfolio', year: '2025', tech: ['React', 'Framer Motion', 'Three.js'], desc: 'Award-shortlisted creative studio site with rich 3D interactions.', img: 'https://images.unsplash.com/photo-1720962158937-7ea890052166?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Kinetic Commerce', cat: 'E-Commerce', year: '2024', tech: ['Shopify', 'Liquid', 'GSAP'], desc: 'Headless Shopify build with motion-driven storytelling for a fashion brand.', img: 'https://images.unsplash.com/photo-1720962158789-9389a4f399da?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Vector Insights', cat: 'SaaS', year: '2024', tech: ['Next.js', 'D3', 'Tailwind'], desc: 'Data-viz platform with real-time dashboards and dense information design.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Meridian OS', cat: 'Product', year: '2025', tech: ['React', 'WebGL', 'Lenis'], desc: 'Marketing site for an OS-inspired productivity suite — shipped in 3 weeks.', img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Cipher Journal', cat: 'WordPress', year: '2024', tech: ['WordPress', 'Elementor', 'CSS'], desc: 'A minimal editorial theme built for a niche design magazine.', img: 'https://images.unsplash.com/photo-1781914476939-91a41b914899?q=80&w=1400&auto=format&fit=crop' },
];

const FILTERS = ['All', 'Web App', 'Portfolio', 'E-Commerce', 'SaaS', 'Product', 'WordPress'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Featured<br /><span className="font-serif-italic font-normal">projects.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${filter === f ? 'bg-foreground text-background border-foreground' : 'glass hover:border-accent'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <motion.a key={p.title} href="#" layout
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: (i % 2) * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              data-cursor="view" data-label="View Case"
              className={`group relative rounded-3xl overflow-hidden border border-border/60 bg-card/40 backdrop-blur hover:border-accent/60 transition-colors ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest">{p.cat}</span>
                  <span className="px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest">{p.year}</span>
                </div>
                <div className="absolute top-4 right-4 w-11 h-11 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter mb-2">{p.title}</h3>
                  <p className="text-muted-foreground max-w-md">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="px-3 py-1 rounded-full border border-border text-xs font-mono">{t}</span>)}
                </div>
              </div>
              <div className="px-6 md:px-8 pb-6 flex gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span className="link-underline flex items-center gap-1.5"><ExternalLink size={12}/> Live Demo</span>
                <span className="link-underline flex items-center gap-1.5"><Github size={12}/> Github</span>
                <span className="link-underline">Case Study</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
