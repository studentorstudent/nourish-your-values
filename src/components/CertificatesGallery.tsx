import { useState } from "react";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import cert1 from "@/assets/cert-1.png";
import cert2 from "@/assets/cert-2.png";
import cert3 from "@/assets/cert-3.png";
import cert4 from "@/assets/cert-4.png";

const certificates = [cert1, cert2, cert3, cert4];

const CertificatesGallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + certificates.length) % certificates.length);
  };

  return (
    <div className="mt-6 space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Award className="w-4 h-4 text-primary" />
        <span>Certificates of Achievement</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {certificates.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="overflow-hidden rounded-lg border border-border hover:border-primary/40 transition-colors aspect-[3/4]"
          >
            <img src={src} alt={`Certificate ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={certificates[lightbox]}
            alt={`Certificate ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificatesGallery;
