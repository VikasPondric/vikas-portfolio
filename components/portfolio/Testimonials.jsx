'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { name: 'Sarah Mitchell', role: 'Founder, Loom Studio', avatar: 'https://i.pravatar.cc/120?img=47', quote: 'Vikas delivered a portfolio site that felt like Apple met Awwwards. The animations are ridiculous — in the best way. Best hire of the year.', rating: 5 },
  { name: 'Daniel Cho', role: 'Head of Product, Kinetic', avatar: 'https://i.pravatar.cc/120?img=12', quote: 'Sharp eye for detail, obsessive about performance. Shipped our marketing site in 3 weeks with a 98 Lighthouse score.', rating: 5 },
  { name: 'Amelia Foster', role: 'Creative Director, Aurum', avatar: 'https://i.pravatar.cc/120?img=45', quote: 'Turned our Figma into a living, breathing site. Every micro-interaction is intentional. He’s an absolute pro.', rating: 5 },
  { name: 'Marcus Lee', role: 'CTO, Nebula', avatar: 'https://i.pravatar.cc/120?img=15', quote: 'Rare combo of design sensibility and engineering rigor. Our dashboard finally looks as good as the product.', rating: 5 },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[idx];

  return (
    <section id="testimonials" className="relative py-32 md:py-40">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Testimonials</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">Kind <span className="font-serif-italic font-normal">words.</span></h2>
        </div>

        <div className="relative glass rounded-3xl p-8 md:p-14 overflow-hidden">
          <Quote className="absolute top-8 right-8 text-accent/20" size={80} />
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <div className="flex gap-1 mb-6">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}</div>
              <p className="font-display text-2xl md:text-4xl font-medium tracking-tight leading-snug">“{r.quote}”</p>
              <div className="mt-10 flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-14 h-14 rounded-full object-cover border border-border" />
                <div>
                  <p className="font-display font-semibold text-lg">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-10">
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Review ${i+1}`}
                className={`h-1 rounded-full transition-all ${i === idx ? 'w-10 bg-accent' : 'w-5 bg-muted'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
