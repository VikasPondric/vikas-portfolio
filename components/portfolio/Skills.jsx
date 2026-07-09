'use client';
import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'HTML5', level: 98 }, { name: 'CSS3', level: 96 }, { name: 'SASS', level: 90 },
  { name: 'Tailwind CSS', level: 96 }, { name: 'Bootstrap', level: 92 }, { name: 'JavaScript', level: 90 },
  { name: 'WordPress', level: 94 }, { name: 'Elementor', level: 92 }, { name: 'Shopify', level: 85 },
  { name: 'Figma', level: 90 }, { name: 'Photoshop', level: 80 }, { name: 'Responsive Design', level: 96 },
  { name: 'Git', level: 85 }, { name: 'Performance Opt.', level: 88 }, { name: 'Animations', level: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Skills</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Tools of the<br /><span className="font-serif-italic font-normal">trade.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">A carefully curated stack focused on modern, performant, and delightful web experiences.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SKILLS.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: (i % 5) * 0.05, duration: 0.6 }}
              className="group relative rounded-2xl glass p-5 hover:border-accent/60 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-transparent transition-all duration-500" />
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <p className="font-display font-semibold text-base tracking-tight">{s.name}</p>
                  <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
                </div>
                <div className="mt-3 h-[3px] w-full bg-muted overflow-hidden rounded-full">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-foreground to-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
