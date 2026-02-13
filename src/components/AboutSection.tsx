import { Heart, Target, Eye, Sparkles, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Responsibility", desc: "Owning the impact of our food choices on our bodies and communities." },
  { icon: Sparkles, title: "Discipline", desc: "Building consistent habits that fuel focus and academic success." },
  { icon: Eye, title: "Awareness", desc: "Understanding what we eat and why it matters for long-term health." },
  { icon: Heart, title: "Self-Respect", desc: "Nourishing ourselves because we deserve to feel our best every day." },
  { icon: Users, title: "Community Impact", desc: "Inspiring peers to adopt healthier, more intentional lifestyles." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-3">
          About the Project
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-foreground">
          What Is SLC?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-base leading-relaxed">
          A Student-Led Contribution (SLC) is a long-term project where students
          create a meaningful social impact. Our focus: helping young people
          understand how healthy nutrition connects to personal values like
          discipline, awareness, and self-respect — fueling better focus, energy,
          and long-term success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground font-['Playfair_Display']">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
