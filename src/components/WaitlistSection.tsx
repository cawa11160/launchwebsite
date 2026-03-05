import { FormEvent, useState } from "react";
import { toast } from "sonner";

type WaitlistForm = {
  name: string;
  email: string;
  city: string;
  favoriteGenre: string;
};

const initialForm: WaitlistForm = {
  name: "",
  email: "",
  city: "",
  favoriteGenre: "",
};

export default function WaitlistSection() {
  const [form, setForm] = useState<WaitlistForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Name and email are required.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const responseText = await response.text();
      let data: { error?: string } = {};
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        data = {};
      }

      if (!response.ok) {
        if (response.status >= 500) {
          toast.error("Waitlist server is unavailable. Run `npm run dev:api` and try again.");
          return;
        }
        toast.error(data.error ?? "Unable to join waitlist right now.");
        return;
      }

      setForm(initialForm);
      toast.success("You're on the waitlist. We will reach out before launch.");
    } catch {
      toast.error("Cannot reach waitlist server. Run `npm run dev:api` and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="section-divider py-24 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Join the waitlist
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Be first to try Offtrack. Share a few details and we will email your invite when access opens.
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1">
            <label htmlFor="waitlist-name" className="text-sm uppercase tracking-wide text-muted-foreground">
              Name
            </label>
            <input
              id="waitlist-name"
              className="w-full border border-border px-3 py-2 bg-background text-foreground"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="waitlist-email" className="text-sm uppercase tracking-wide text-muted-foreground">
              Email
            </label>
            <input
              id="waitlist-email"
              type="email"
              className="w-full border border-border px-3 py-2 bg-background text-foreground"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="waitlist-city" className="text-sm uppercase tracking-wide text-muted-foreground">
              City (optional)
            </label>
            <input
              id="waitlist-city"
              className="w-full border border-border px-3 py-2 bg-background text-foreground"
              value={form.city}
              onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="waitlist-genre" className="text-sm uppercase tracking-wide text-muted-foreground">
              Favorite genre (optional)
            </label>
            <input
              id="waitlist-genre"
              className="w-full border border-border px-3 py-2 bg-background text-foreground"
              value={form.favoriteGenre}
              onChange={(event) => setForm((prev) => ({ ...prev, favoriteGenre: event.target.value }))}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join waitlist"}
          </button>
        </form>
      </div>
    </section>
  );
}
