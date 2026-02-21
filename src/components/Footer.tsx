const Footer = () => (
  <footer className="section-divider py-12 px-6">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <span className="font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          offtrack
        </span>
        <p className="text-sm text-muted-foreground mt-1">hello@offtrack.fm</p>
      </div>
      <div className="flex gap-6">
        {["Twitter", "Instagram", "TikTok"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
    <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-border">
      <p className="text-xs text-muted-foreground">© 2026 Offtrack. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
