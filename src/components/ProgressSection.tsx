import { useState } from "react";
import { weeklyEntries } from "@/data/weekly-progress";
import { CalendarDays, FileText, ExternalLink, ChevronDown } from "lucide-react";
import SurveyResults from "./SurveyResults";
import OutreachSection from "./OutreachSection";
import WorkshopGallery from "./WorkshopGallery";
import Week7Gallery from "./Week7Gallery";

const ProgressSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="progress" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-3">
          Weekly Progress
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Our Journey So Far
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {weeklyEntries.map((entry, index) => {
              const isOpen = openId === entry.id;
              const isLast = index === weeklyEntries.length - 1;

              return (
                <div key={entry.id} className="relative pl-12 sm:pl-16 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background z-10" />

                  {/* Card */}
                  <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors">
                    {/* Header — always visible, clickable */}
                    <button
                      onClick={() => toggle(entry.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <CalendarDays className="w-4 h-4 shrink-0" />
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
                          isOpen ? "rotate-180" : ""
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-sm font-medium"
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-sm font-medium"
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
                              (id) => (
                                <div key={id} className="mt-4">
                                  {entry.videoCaption && (
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic border-l-2 border-primary/40 pl-3">
                                      {entry.videoCaption}
                                    </p>
                                  )}
                                  <div className="rounded-xl overflow-hidden aspect-video">
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
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
