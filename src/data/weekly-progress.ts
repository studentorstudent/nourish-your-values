export interface WeeklyEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  content: string;
  pdfUrl?: string;
  vimeoId?: string;
}

export const weeklyEntries: WeeklyEntry[] = [
  {
    id: "challenge-1",
    date: "Week 1 — February 2026",
    title: "Challenge 1: Identifying Our Values",
    description:
      "We began by reflecting on our personal values and how they connect to the food choices we make every day.",
    content:
      "In our first week, each team member identified their top personal values and explored how these values influence their daily nutrition habits. We discovered that values like discipline, self-respect, and awareness directly shape what we eat and how we feel.",
    pdfUrl: "/challenge_1.pdf",
  },
  {
    id: "challenge-2",
    date: "Week 2 — February 2026",
    title: "Challenge 2: Setting Our Goal",
    description:
      "We defined our project's mission — to inspire students to connect healthy eating with personal growth.",
    content:
      "Building on our values exploration, we crafted a clear goal: create a meaningful social contribution by promoting healthy nutrition among students. We outlined our weekly challenge format and committed to documenting every step of our journey.",
    vimeoId: "1163961665",
  },
];
