import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import w1 from "@/assets/week7-1.jpg";
import w2 from "@/assets/week7-2.jpg";
import w3 from "@/assets/week7-3.jpg";
import w4 from "@/assets/week7-4.jpg";
import w5 from "@/assets/week7-5.jpg";
import w6 from "@/assets/week7-6.jpg";

const photos = [w1, w2, w3, w4, w5, w6];

const Week7Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + photos.length) % photos.length);
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Camera className="w-4 h-4" />
        <span>Event Photos</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors aspect-[4/3]"
          >
            <img src={src} alt={`Week 7 photo ${i + 1}`} className="w-full h-full object-cover" />
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
            src={photos[lightbox]}
            alt={`Week 7 photo ${lightbox + 1}`}
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

export default Week7Gallery;
