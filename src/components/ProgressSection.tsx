import { useState } from "react";
import { weeklyEntries } from "@/data/weekly-progress";
import { CalendarDays, FileText, ExternalLink, ChevronDown, Play } from "lucide-react";
import SurveyResults from "./SurveyResults";
import OutreachSection from "./OutreachSection";
import WorkshopGallery from "./WorkshopGallery";
import Week7Gallery from "./Week7Gallery";
import CelebrationGallery from "./CelebrationGallery";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProgressSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="progress" className="py-24 px-6 relative">
      {/* Top divider */}
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className={`reveal ${headerVisible ? "visible" : ""}`}>
          <p className="text-gradient-primary font-semibold tracking-[0.25em] uppercase text-sm text-center mb-3">
            Weekly Progress
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Our Journey So Far
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - gradient */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-0">
            {weeklyEntries.map((entry, index) => {
              const isOpen = openId === entry.id;

              return (
                <TimelineCard
                  key={entry.id}
                  entry={entry}
                  isOpen={isOpen}
                  index={index}
                  onToggle={() => toggle(entry.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  entry: (typeof import("@/data/weekly-progress"))["weeklyEntries"][number];
  isOpen: boolean;
  index: number;
  onToggle: () => void;
}

const TimelineCard = ({ entry, isOpen, index, onToggle }: TimelineCardProps) => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`relative pl-12 sm:pl-16 pb-8 reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background z-10 transition-shadow ${isOpen ? "shadow-[0_0_8px_hsl(142,40%,45%,0.5)]" : ""}`} />

      {/* Card */}
      <article className="bg-card border border-border rounded-xl overflow-hidden card-glow">
        {/* Header */}
        <button
          onClick={onToggle}
          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <CalendarDays className="w-4 h-4 shrink-0 text-primary/60" />
              <span>{entry.date}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground font-['Playfair_Display'] mb-1">
              {entry.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {entry.description}
            </p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-primary" : ""
            }`}
          />
        </button>

        {/* Expandable content */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-border/50">
              {entry.content && (
                <p className="text-sm text-foreground/80 leading-relaxed mt-4 mb-4">
                  {entry.content}
                </p>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mb-2">
                {entry.pdfUrl && (
                  <a
                    href={entry.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all hover:-translate-y-0.5 text-sm font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    View Presentation (PDF)
                  </a>
                )}
                {entry.surveyFormUrl && (
                  <a
                    href={entry.surveyFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all hover:-translate-y-0.5 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Survey Form
                  </a>
                )}
              </div>

              {entry.hasSurveyResults && <SurveyResults />}
              {entry.hasOutreachSection && <OutreachSection />}
              {entry.hasWorkshopGallery && <WorkshopGallery />}
              {entry.hasWeek7Gallery && <Week7Gallery />}

              {/* Vimeo Videos */}
              {entry.vimeoId &&
                (Array.isArray(entry.vimeoId) ? entry.vimeoId : [entry.vimeoId]).map(
                  (id, vidIndex) => (
                    <div key={id} className="mt-5">
                      {entry.videoCaption && vidIndex === 0 && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic border-l-2 border-primary/40 pl-3">
                          {entry.videoCaption}
                        </p>
                      )}
                      <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_hsl(142,40%,45%,0.1)] hover:shadow-[0_0_30px_hsl(142,40%,45%,0.2)] transition-shadow duration-300">
                        {/* Video label */}
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-primary/90 text-primary-foreground text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                          <Play className="w-3 h-3 fill-current" />
                          <span>Video {Array.isArray(entry.vimeoId) && entry.vimeoId.length > 1 ? `${vidIndex + 1}/${entry.vimeoId.length}` : ""}</span>
                        </div>
                        <div className="aspect-video">
                          <iframe
                            src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title={entry.title}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProgressSection;
