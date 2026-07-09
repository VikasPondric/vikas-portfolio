'use client';
export default function MarqueeStrip() {
  const items = ['Frontend Development', 'Creative Coding', 'WordPress Expert', 'Figma → Code', 'Motion Design', 'Shopify', 'Elementor', 'Performance Audits'];
  const row = [...items, ...items, ...items];
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-y border-border/60 bg-background/40 backdrop-blur-sm">
      <div className="flex whitespace-nowrap marquee-track">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-4xl md:text-6xl font-semibold tracking-tighter">
              <span className="font-serif-italic text-muted-foreground">{i % 2 === 0 ? '' : ''}</span>
              {t}
            </span>
            <span className="w-3 h-3 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
