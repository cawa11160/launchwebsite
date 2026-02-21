const WhatWeDoSection = () => (
  <section id="what-we-do" className="section-divider py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
        What we do
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
        Offtrack is a music streaming platform built around one idea: the best music shouldn't be the hardest to find. We combine location-based discovery with a fairer algorithm to surface sounds you'd never hear otherwise.
      </p>
      <ul className="grid sm:grid-cols-2 gap-6">
        {[
          "Stream music from artists worldwide",
          "Find concerts and live shows near you with map discovery",
          "Get recommendations that prioritize diversity, not popularity",
          "Support artists directly through merch and plays",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1.5 block w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhatWeDoSection;
