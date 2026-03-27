import { CheckCircle, ExternalLink } from "lucide-react";

const OutreachSection = () => {
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
    </div>
  );
};

export default OutreachSection;
