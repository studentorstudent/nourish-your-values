import { weeklyEntries } from "@/data/weekly-progress";
import { CalendarDays, FileText, ExternalLink } from "lucide-react";
import SurveyResults from "./SurveyResults";
import OutreachSection from "./OutreachSection";

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
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {entry.content}
              </p>

              {/* PDF Download Button */}
              {entry.pdfUrl && (
                <a
                  href={entry.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  View Presentation (PDF)
                </a>
              )}

              {/* Google Form Link */}
              {entry.surveyFormUrl && (
                <a
                  href={entry.surveyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-sm font-medium ml-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Survey Form
                </a>
              )}

              {/* Survey Results */}
              {entry.hasSurveyResults && <SurveyResults />}

              {/* Outreach & Collaboration */}
              {entry.hasOutreachSection && <OutreachSection />}

              {/* Vimeo Video Embed */}
              {entry.vimeoId && (
                <div className="mt-4 rounded-xl overflow-hidden aspect-video">
                  <iframe
                    src={`https://player.vimeo.com/video/${entry.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title={entry.title}
                    className="w-full h-full"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
