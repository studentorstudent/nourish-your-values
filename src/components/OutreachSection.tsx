import { CheckCircle, ExternalLink, Users, Globe, GraduationCap, MessageCircle, XCircle } from "lucide-react";
import expertInterview from "@/assets/expert-interview.jpg";
import expertProfile from "@/assets/expert-profile.jpg";
import gratitudeMessage from "@/assets/gratitude-message.jpg";
import failedWorkshopChat from "@/assets/failed-workshop-chat.png";

const OutreachSection = () => {
  return (
    <div className="mt-6 space-y-6">
      {/* Failed Workshop Attempt */}
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <XCircle className="w-5 h-5 text-destructive" />
          <h4 className="text-sm font-semibold text-foreground">
            First Attempt: Workshop Did Not Work Out
          </h4>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          We had already planned a workshop with a guest speaker, but unfortunately she was unavailable by the needed dates as she was leaving the city. Despite our efforts to reschedule, the timing didn't align — so we had to pivot and find another expert.
        </p>
        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden border border-border max-w-xs">
            <img
              src={failedWorkshopChat}
              alt="WhatsApp conversation showing the workshop cancellation due to scheduling conflict"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Expert Profile */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <h4 className="text-sm font-semibold text-foreground">
            Guest Speaker: Sandygul Aizharikova
          </h4>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col sm:flex-row gap-5 mb-5">
          <div className="flex-shrink-0">
            <img
              src={expertProfile}
              alt="Sandygul Aizharikova Instagram profile"
              className="w-full sm:w-48 rounded-lg border border-border object-cover"
            />
          </div>
          <div className="space-y-3">
            <div>
              <h5 className="font-semibold text-foreground text-base">Sandygul Aizharikova</h5>
              <p className="text-xs text-primary font-medium">🌿 Top Nutritionist KZ, Biohacker</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-card rounded-lg p-2 border border-border">
                <p className="text-sm font-bold text-foreground">2,682</p>
                <p className="text-[10px] text-muted-foreground">Posts</p>
              </div>
              <div className="bg-card rounded-lg p-2 border border-border">
                <p className="text-sm font-bold text-foreground">67.7K</p>
                <p className="text-[10px] text-muted-foreground">Followers</p>
              </div>
              <div className="bg-card rounded-lg p-2 border border-border">
                <p className="text-sm font-bold text-foreground">67</p>
                <p className="text-[10px] text-muted-foreground">Countries</p>
              </div>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Bastyr University USA, PreventAge, UOM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Biohacking, Mental Health, Nutrition</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>1,000+ women helped with health transformations</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/sandygul_aizharikova?igsh=MXFnY2hnOTByNGkzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              @sandygul_aizharikova on Instagram
            </a>
          </div>
        </div>

        {/* Interview Photo */}
        <div className="mb-5 flex justify-center">
          <div className="relative rounded-xl overflow-hidden border border-border group max-w-sm">
            <img
              src={expertInterview}
              alt="Sandygul Aizharikova during a media interview"
              className="w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-0 right-0 text-xs text-white/90 text-center italic font-medium">
              Sandygul Aizharikova — media interview
            </p>
          </div>
        </div>

        {/* Gratitude Message */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-4 h-4 text-primary" />
            <p className="text-xs font-medium text-foreground">Thank-You Message to the Speaker</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-xl overflow-hidden border border-border max-w-xs">
              <img
                src={gratitudeMessage}
                alt="Thank you message to the nutritionist"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-0 right-0 text-[10px] text-white/80 text-center italic px-3">
                "Thank you very much for today's lecture. I think you explained the topic of a healthy lifestyle in a very interesting and unique way."
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Details */}
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
              <li>Workshop completed ✅</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachSection;
