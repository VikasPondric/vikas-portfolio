'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layout, FileCode2, Zap, Palette, Gauge, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { icon: Code2, title: 'Website Development', desc: 'Custom, responsive, blazingly fast websites built with modern stacks.', tag: '01' },
  { icon: Layout, title: 'Landing Page Design', desc: 'High-converting landing pages engineered around your brand.', tag: '02' },
  { icon: FileCode2, title: 'Figma to HTML', desc: 'Pixel-perfect conversions from design files to production code.', tag: '03' },
  { icon: Zap, title: 'Custom Web Animations', desc: 'GSAP & Framer Motion powered micro-interactions.', tag: '04' },
  { icon: Palette, title: 'CMS Theme Customization', desc: 'WordPress, Elementor & Shopify theme development.', tag: '05' },
  { icon: Gauge, title: 'Performance Audit', desc: 'Deep frontend audits, Lighthouse optimization & Core Web Vitals.', tag: '06' },
];

function ServiceCard({ s, i }) {
  const ref = useRef(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.08);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.08);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  const Icon = s.icon;

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ x: sx, y: sy }}
      className="group relative rounded-3xl overflow-hidden bg-card/50 backdrop-blur border border-border/60 p-8 hover:border-accent/80 transition-colors"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), hsl(var(--accent)/0.15), transparent 60%)' }} />
      <div className="relative flex flex-col h-full min-h-[280px]">
        <div className="flex items-start justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
            <Icon size={22} />
          </div>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{s.tag}</span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">{s.title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="link-underline text-muted-foreground group-hover:text-foreground transition">Learn more</span>
          <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:rotate-45 transition-all"><ArrowUpRight size={14} /></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Services</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              What I<br /><span className="font-serif-italic font-normal">do best.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">End-to-end frontend engineering — from concept, to design, to that final buttery smooth deploy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
