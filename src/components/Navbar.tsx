import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "What we do", href: "#what-we-do" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          offtrack
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
          >
            Join the waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium tracking-wide text-center hover:opacity-80 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Join the waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
