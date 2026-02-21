import { MapPin, Shuffle, ListMusic } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Map-based discovery",
    description:
      "Explore music by location. Tap Lagos, Tokyo, or Berlin and hear what's emerging from each scene — genres, artists, movements you'd never find through a search bar.",
  },
  {
    icon: Shuffle,
    title: "Less-biased algorithm",
    description:
      "Our recommendation engine prioritizes discovery and diversity over popularity. Smaller artists get the same chance to reach your ears as anyone else.",
  },
  {
    icon: ListMusic,
    title: "Playlists, saves & sharing",
    description:
      "Create playlists, save your favourite finds, and share tracks with friends. The basics, done right — no clutter.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="section-divider py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16" style={{ fontFamily: "var(--font-heading)" }}>
        Key features
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col">
            <f.icon size={28} strokeWidth={1.5} className="mb-4 text-foreground" />
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {f.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
