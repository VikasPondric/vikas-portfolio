'use client';
import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function Resume() {
  const notify = (msg) => toast(msg, { description: 'The full CV is available upon request — drop me a note!' });

  return (
    <section id="resume" className="relative py-32 md:py-40">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative rounded-[2rem] overflow-hidden glass p-10 md:p-16">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Resume</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]">Grab my <span className="font-serif-italic font-normal">CV.</span></h2>
              <p className="mt-5 text-muted-foreground text-lg">A curated one-pager summarizing experience, tech stack, and highlighted case studies.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => notify('Downloading CV…')} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition">
                  <Download size={16}/> Download CV
                </button>
                <button onClick={() => notify('Opening preview…')} className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-foreground hover:text-background transition">
                  <Eye size={16}/> Preview Resume
                </button>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl glass overflow-hidden p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <FileText size={20} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">PDF — 1 page</span>
                </div>
                <div className="mt-6">
                  <p className="font-display text-3xl font-bold tracking-tighter">Vikas Pondric</p>
                  <p className="text-sm text-muted-foreground mt-1">Frontend Developer · Creative Coder</p>
                </div>
                <div className="mt-6 space-y-2">
                  {['Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((s, i) => (
                    <div key={s} className="flex items-center gap-3 text-sm">
                      <span className="font-mono text-[10px] text-muted-foreground w-6">0{i+1}</span>
                      <span className="h-px bg-border flex-1" />
                      <span className="text-muted-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="font-serif-italic text-accent text-2xl">Vikas P.</div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">v2.5 · 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
