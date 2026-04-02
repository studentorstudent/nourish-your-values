import { useState } from "react";
import { PartyPopper, Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import c1 from "@/assets/celebration-food.jpg";
import c2 from "@/assets/celebration-team.jpg";
import cert1 from "@/assets/cert-1.png";
import cert2 from "@/assets/cert-2.png";
import cert3 from "@/assets/cert-3.png";
import cert4 from "@/assets/cert-4.png";

const photos = [
  { src: c1, alt: "Celebration dinner — traditional plov dish" },
  { src: c2, alt: "Team celebrating together" },
];

const certificates = [cert1, cert2, cert3, cert4];

const CelebrationGallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const allImages = [...photos.map(p => p.src), ...certificates];
  const allAlts = [...photos.map(p => p.alt), ...certificates.map((_, i) => `Certificate ${i + 1}`)];

  const navigate = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + allImages.length) % allImages.length);
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <PartyPopper className="w-4 h-4 text-primary" />
        <span>Celebration Photos</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors aspect-[4/3]"
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Certificates - small thumbnails */}
      <div className="mt-4">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
          <Award className="w-3.5 h-3.5 text-primary" />
          <span>Certificates of Achievement</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {certificates.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photos.length + i)}
              className="overflow-hidden rounded-lg border border-border hover:border-primary/40 transition-colors aspect-[3/4]"
            >
              <img src={src} alt={`Certificate ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
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
            src={allImages[lightbox]}
            alt={allAlts[lightbox]}
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

export default CelebrationGallery;
