import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Progress", href: "#progress" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold font-['Playfair_Display'] text-primary">
          GoodFood
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
