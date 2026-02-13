import { weeklyEntries } from "@/data/weekly-progress";
import { CalendarDays } from "lucide-react";

const ProgressSection = () => {
  return (
    <section id="progress" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-3">
          Weekly Progress
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Our Journey So Far
        </h2>

        <div className="space-y-6">
          {weeklyEntries.map((entry) => (
            <article
              key={entry.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <CalendarDays className="w-4 h-4" />
                <span>{entry.date}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-['Playfair_Display']">
                {entry.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {entry.description}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {entry.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
