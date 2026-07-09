'use client';
import { motion } from 'framer-motion';

const STEPS = [
  { n: '01', title: 'Discovery', desc: 'Kickoff calls, competitor research and understanding your brand DNA.' },
  { n: '02', title: 'Planning', desc: 'Wireframes, sitemap, information architecture and content strategy.' },
  { n: '03', title: 'Design', desc: 'High-fidelity Figma designs, moodboards and interaction prototypes.' },
  { n: '04', title: 'Development', desc: 'Clean, semantic, accessible code with reusable components.' },
  { n: '05', title: 'Testing', desc: 'Cross-device QA, accessibility audits, and Lighthouse tuning.' },
  { n: '06', title: 'Deployment', desc: 'CI/CD setup, domain wiring, analytics and go-live monitoring.' },
  { n: '07', title: 'Maintenance', desc: 'Ongoing updates, performance monitoring and iterative improvements.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Workflow</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">My <span className="font-serif-italic font-normal">process.</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">A calm, deliberate workflow refined over dozens of client projects — shipping premium work, on time, every time.</p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-0 md:-translate-x-1/2" />
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Step {s.n}</span>
                  <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tighter mt-2">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground max-w-md md:inline-block">{s.desc}</p>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--background)),0_0_30px_hsl(var(--accent))]" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
