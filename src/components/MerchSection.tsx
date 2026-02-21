const MerchSection = () => (
  <section id="merch" className="section-divider py-24 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Artist merch
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We believe in putting money back in artists' pockets. Our built-in merch storefront lets creators sell directly to fans — no middlemen, no markup.
        </p>
      </div>
      <a
        href="#"
        className="border border-foreground text-foreground px-8 py-3 text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors self-start whitespace-nowrap"
      >
        Artist merch →
      </a>
    </div>
  </section>
);

export default MerchSection;
