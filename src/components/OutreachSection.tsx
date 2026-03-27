import { Mail, CheckCircle, ExternalLink } from "lucide-react";
import emailCookingClub from "@/assets/email-cooking-club.png";
import emailCultAcademy from "@/assets/email-cult-academy.png";
import emailHealthCenter from "@/assets/email-health-center.png";
import { useState } from "react";

const outreachItems = [
  {
    org: "NU Cooking Club",
    email: "cooking_club@nu.edu.kz",
    summary:
      "Proposed a hands-on cooking workshop or cook-off style event where teams cook together with an experienced mentor while learning about nutritional value.",
    image: emailCookingClub,
  },
  {
    org: "Cult Academy",
    email: "cult.academy.lc@gmail.com",
    summary:
      "Proposed a professional chef-led cooking workshop and a short interview with one of their chefs about healthy ingredient selection and practical student advice.",
    image: emailCultAcademy,
  },
  {
    org: "University Health Center",
    email: "uhc@nu.edu.kz",
    summary:
      "Requested a collaboration for an interview or discussion session with a nutritionist or doctor specializing in diet and healthy lifestyle.",
    image: emailHealthCenter,
  },
];

const OutreachSection = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="mt-6 space-y-6">
      {/* Confirmed Expert */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <h4 className="text-sm font-semibold text-foreground">
            Confirmed: Nutrition Expert Workshop
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          A recognized Kazakhstan-based nutrition specialist has officially
          agreed to conduct a workshop after <strong>March 10, 2026</strong>.
          She has supported more than 1,000 women in achieving measurable
          improvements in body composition, digestion, and overall well-being.
        </p>
        <a
          href="https://www.instagram.com/sandygul_aizharikova?igsh=MXFnY2hnOTByNGkzcg=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mb-3"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View expert's Instagram profile
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="bg-card rounded-lg p-3 border border-border">
            <p className="font-medium text-foreground mb-1">Workshop Topics</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Balanced nutrition principles</li>
              <li>Sustainable weight management</li>
              <li>Gut health optimization</li>
              <li>Lifestyle adjustments for long-term results</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-3 border border-border">
            <p className="font-medium text-foreground mb-1">Format</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Structured lecture component</li>
              <li>Interactive Q&A discussion</li>
              <li>Date: After March 10 (TBD)</li>
              <li>Format: Offline or online (TBD)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Outreach Emails */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Collaboration Outreach
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outreachItems.map((item) => (
            <div
              key={item.org}
              className="bg-card border border-border rounded-xl p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-semibold text-foreground">
                  {item.org}
                </h5>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                  <CheckCircle className="w-3 h-3" />
                  Contacted
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Mail className="w-3 h-3" />
                <span>{item.email}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.summary}
              </p>
              <button
                onClick={() =>
                  setExpandedImage(
                    expandedImage === item.org ? null : item.org
                  )
                }
                className="text-xs text-primary hover:underline"
              >
                {expandedImage === item.org ? "Hide email" : "View email →"}
              </button>
              {expandedImage === item.org && (
                <img
                  src={item.image}
                  alt={`Email to ${item.org}`}
                  className="rounded-lg border border-border mt-2 w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutreachSection;
