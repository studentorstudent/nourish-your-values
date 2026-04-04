import { useState } from "react";
import { Users, MessageSquare, Camera, Trophy } from "lucide-react";

import marathonFeedbackAmanzhan from "@/assets/marathon-feedback-amanzhan.png";
import marathonFeedbackMagzhan from "@/assets/marathon-feedback-magzhan.png";
import marathonFeedbackAkylzhan from "@/assets/marathon-feedback-akylzhan.png";
import marathonFeedbackArsen from "@/assets/marathon-feedback-arsen.png";
import marathonPhotosDrinking from "@/assets/marathon-photos-drinking.png";
import marathonPhotosWater from "@/assets/marathon-photos-water.png";
import marathonPhotosGym from "@/assets/marathon-photos-gym.png";
import marathonPhotosFood1 from "@/assets/marathon-photos-food1.png";
import marathonPhotosFood2 from "@/assets/marathon-photos-food2.png";
import marathonGroup from "@/assets/marathon-group.png";
import marathonChatFood from "@/assets/marathon-chat-food.png";
import marathonChatNrt from "@/assets/marathon-chat-nrt.png";
import marathonChatAlemkhan from "@/assets/marathon-chat-alemkhan.png";
import marathonChatMansur from "@/assets/marathon-chat-mansur.png";

const feedbackImages = [
  { src: marathonFeedbackAmanzhan, alt: "Feedback from Amanzhan", name: "Amanzhan" },
  { src: marathonFeedbackMagzhan, alt: "Feedback from Magzhan", name: "Magzhan" },
  { src: marathonFeedbackAkylzhan, alt: "Feedback from Akylzhan", name: "Akylzhan" },
  { src: marathonFeedbackArsen, alt: "Feedback from Arsen Serikkazy", name: "Arsen Serikkazy" },
];

const chatComments = [
  { src: marathonChatFood, alt: "Participant sharing breakfast photos in the group", name: "Amanzhan — Breakfast" },
  { src: marathonChatNrt, alt: "Participant sharing progress feedback", name: "Nrt — Reflection" },
  { src: marathonChatAlemkhan, alt: "Alemkhan sharing healthy habits progress", name: "Alemkhan — Progress" },
  { src: marathonChatMansur, alt: "Mansur sharing marathon feedback", name: "Mansur — Feedback" },
];

const activityPhotos = [
  { src: marathonPhotosDrinking, alt: "Participants drinking water together" },
  { src: marathonPhotosWater, alt: "Participant with water bottle at sports" },
  { src: marathonPhotosGym, alt: "Buddy pair drinking water at the gym" },
  { src: marathonPhotosFood1, alt: "First course challenge - healthy eating" },
  { src: marathonPhotosFood2, alt: "Healthy food and water habits" },
];

const BuddyMarathon = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="mt-6 space-y-8">
      {/* Telegram Group */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-primary" />
          <h4 className="text-base font-bold text-foreground">
            Telegram Buddy Marathon Group
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          We created a Telegram group — "1 апталық Healthy Habits марафон (Buddy system)" — with 12 members. 
          Participants shared their daily progress, photos of healthy meals, water intake, and exercise routines, 
          holding each other accountable through the buddy system.
        </p>
        <div
          className="rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-lg transition-shadow max-w-md mx-auto"
          onClick={() => setLightboxImg(marathonGroup)}
        >
          <img src={marathonGroup} alt="Buddy Marathon Telegram group with 12 members" className="w-full" />
        </div>
      </div>

      {/* Activity Photos */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Camera className="w-5 h-5 text-primary" />
          <h4 className="text-base font-bold text-foreground">
            Marathon Activity Photos
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Throughout the week, participants shared photos of their healthy habits — drinking water, eating balanced meals, 
          and supporting each other at the gym.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {activityPhotos.map((photo, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-lg hover:border-primary/40 transition-all"
              onClick={() => setLightboxImg(photo.src)}
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Group Chat Comments */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h4 className="text-base font-bold text-foreground">
            Group Chat Highlights
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Participants actively shared their progress, meals, and reflections in the Telegram group — holding each other accountable and celebrating small wins together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {chatComments.map((comment, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border bg-card cursor-pointer hover:shadow-lg hover:border-primary/40 transition-all"
              onClick={() => setLightboxImg(comment.src)}
            >
              <div className="p-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{comment.name}</span>
                </div>
              </div>
              <img src={comment.src} alt={comment.alt} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Participant Feedback */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h4 className="text-base font-bold text-foreground">
            Participant Feedback
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          In the middle of the marathon, we collected feedback from participants. Here's what they shared about how 
          the buddy system helped them build healthier habits:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {feedbackImages.map((fb, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border bg-card cursor-pointer hover:shadow-lg hover:border-primary/40 transition-all"
              onClick={() => setLightboxImg(fb.src)}
            >
              <div className="p-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{fb.name}</span>
                </div>
              </div>
              <img src={fb.src} alt={fb.alt} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default BuddyMarathon;
