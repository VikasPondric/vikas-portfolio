'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, Github, Linkedin, Instagram, MessageCircle, Send } from 'lucide-react';

function Field({ label, textarea, ...props }) {
  const [focus, setFocus] = useState(false);
  const [val, setVal] = useState('');
  const active = focus || val.length > 0;
  const Comp = props.textarea ? 'textarea' : 'input';
  return (
    <div className="relative">
      <label className={`absolute left-4 pointer-events-none transition-all font-mono uppercase tracking-widest ${active ? 'top-2 text-[10px] text-accent' : 'top-4 text-xs text-muted-foreground'}`}>{label}</label>
      <Comp
  {...props}
  rows={textarea ? 5 : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className={`w-full ${props.textarea ? 'pt-8 pb-4' : 'pt-7 pb-3'} px-4 bg-transparent border border-border rounded-2xl focus:outline-none focus:border-accent transition text-foreground`}
      />
    </div>
  );
}

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent!', { description: "Thanks for reaching out. I'll get back within 24 hours." });
    e.target.reset();
  };

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'Github', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@vikaspondric.dev' },
  ];

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 space-y-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">— Contact</p>
            <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">Let's<br /><span className="font-serif-italic font-normal">talk.</span></h2>
            <p className="text-lg text-muted-foreground max-w-md">Have a project brewing, a landing page to launch, or just want to say hi? I read every message.</p>

            <div className="space-y-3 pt-4">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-accent transition-colors">
                  <span className="flex items-center gap-4"><s.icon size={18} className="text-muted-foreground group-hover:text-accent transition" /><span className="font-display text-xl font-medium">{s.label}</span></span>
                  <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all font-mono text-xs uppercase tracking-widest">Open →</span>
                </a>
              ))}
            </div>
          </div>

          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl glass p-8 md:p-10 space-y-4 self-start">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Your Name" type="text" required />
              <Field label="Email Address" type="email" required />
            </div>
            <Field label="Subject" type="text" required />
            <Field label="Your Message" textarea required />
            <div className="flex items-center justify-between pt-3">
              <p className="text-xs text-muted-foreground">Avg. reply time — within 24 hours.</p>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition">
                Send Message <Send size={14}/>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
