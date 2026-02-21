const steps = [
  {
    number: "01",
    title: "Open the map",
    description: "Browse an interactive world map showing artists, scenes, and sounds tied to real places.",
  },
  {
    number: "02",
    title: "Drop a pin",
    description: "Tap anywhere — a city, a neighbourhood, a country — to hear what's being made there right now.",
  },
  {
    number: "03",
    title: "Let the algorithm learn",
    description: "Our recommendation engine adapts to your taste without trapping you in a filter bubble.",
  },
  {
    number: "04",
    title: "Save, share, support",
    description: "Build playlists, share tracks, and support artists by buying merch — all in one place.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-divider py-24 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16" style={{ fontFamily: "var(--font-heading)" }}>
        How it works
      </h2>
      <div className="grid sm:grid-cols-2 gap-12">
        {steps.map((s) => (
          <div key={s.number} className="flex flex-col">
            <span className="text-5xl font-bold text-muted-foreground/30 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {s.number}
            </span>
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
