const AboutSection = () => (
  <section id="about" className="section-divider py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
        Who we are
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
        Offtrack was started by music lovers tired of hearing the same ten songs on every platform. We're a small, independent team building tools that put discovery first and artists at the centre.
      </p>
      <div className="grid sm:grid-cols-3 gap-8">
        {[
          { value: "Discovery", text: "We exist to help you find music you didn't know you needed." },
          { value: "Fairness", text: "Every artist deserves a level playing field, regardless of follower count." },
          { value: "Independence", text: "No major-label deals. No pay-to-play playlists. Just good music." },
        ].map((v) => (
          <div key={v.value}>
            <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {v.value}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
