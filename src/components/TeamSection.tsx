import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  { name: "Miras Zhanabayev", role: "Text Editor", initials: "MZ" },
  { name: "Assel", role: "PR Manager", initials: "AS" },
  { name: "Alinur", role: "Project Coordinator", initials: "AL" },
  { name: "Mukhammedin", role: "Researcher", initials: "MK" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-3">
          Our Team
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Meet the People Behind GoodFood
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center text-center group"
            >
              <Avatar className="w-20 h-20 mb-4 border-2 border-border group-hover:border-primary transition-colors">
                <AvatarFallback className="bg-muted text-foreground text-lg font-semibold">
                  {m.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-foreground text-sm">
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
