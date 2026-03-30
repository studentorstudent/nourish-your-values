import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  { name: "Miras Zhanabayev", role: "Text Editor", initials: "MZ", color: "from-primary/30 to-primary/10" },
  { name: "Assel", role: "PR Manager", initials: "AS", color: "from-accent/30 to-accent/10" },
  { name: "Alinur", role: "Project Coordinator", initials: "AL", color: "from-primary/30 to-secondary/10" },
  { name: "Mukhammedin", role: "Researcher", initials: "MK", color: "from-secondary/30 to-primary/10" },
];

const TeamSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="team" className="py-24 px-6 relative">
      {/* Top divider */}
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="text-gradient-primary font-semibold tracking-[0.25em] uppercase text-sm text-center mb-3">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Meet the People Behind GoodFood
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`flex flex-col items-center text-center group reveal ${
                visible ? "visible" : ""
              } reveal-delay-${i + 1}`}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm from-primary/40 to-accent/40" />
                <Avatar className="relative w-20 h-20 border-2 border-border group-hover:border-primary/60 transition-all duration-300">
                  <AvatarFallback className={`bg-gradient-to-br ${m.color} text-foreground text-lg font-semibold`}>
                    {m.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {m.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
