export interface WeeklyEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  content: string;
  pdfUrl?: string;
  vimeoId?: string;
  surveyFormUrl?: string;
  hasSurveyResults?: boolean;
  hasOutreachSection?: boolean;
  hasWorkshopGallery?: boolean;
}

export const weeklyEntries: WeeklyEntry[] = [
  {
    id: "week-1",
    date: "Week 1 — Challenges 1 & 2",
    title: "Clarify Values & Set an Example",
    description:
      "We began by reflecting on our personal values and set an example by aligning our daily food choices with those values.",
    content:
      "In our first week, each team member identified their top personal values and explored how these values influence their daily nutrition habits. We discovered that values like discipline, self-respect, and awareness directly shape what we eat and how we feel. Building on that, we crafted a clear goal: create a meaningful social contribution by promoting healthy nutrition among students.",
    pdfUrl: "/challenge_1.pdf",
    vimeoId: "1163961665",
  },
  {
    id: "week-2",
    date: "Week 2 — Challenge 3",
    title: "Envision the Future",
    description:
      "We envisioned a future where healthy eating is a natural part of every student's lifestyle.",
    content:
      "This week we looked ahead and imagined the long-term impact of our project. We discussed how sustainable nutrition habits can transform not just individual health but entire communities, and outlined a vision for what success looks like.",
    vimeoId: "1167163517",
  },
  {
    id: "week-3",
    date: "Week 3 — Challenge 4",
    title: "Enlist Others",
    description:
      "We reached out to fellow students and community members to join our healthy eating movement.",
    content: "",
    vimeoId: "1167261559",
  },
  {
    id: "week-4",
    date: "Week 4 — Challenge 5",
    title: "Search for Opportunities",
    description:
      "We identified current gaps in student nutrition by conducting a campus-wide survey with 31 respondents.",
    content:
      "To understand the real challenges students face with healthy eating, we created a comprehensive poll and shared it across campus. The survey covered demographics, nutrition knowledge, food accessibility, barriers, and potential solutions. Key findings revealed that lack of motivation (58.1%), lack of time (67.7%), and cost (35.5%) are the biggest barriers. Social media (77.4%) is the primary source of nutrition information, and most students want discounts for healthy food (67.7%) and more affordable campus options.",
    surveyFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSck6fBdUnvZ8nCKPqYrMhkVP9k1G4UTlTW5d5s9lLzv0-Vo_w/viewform?usp=header",
    hasSurveyResults: true,
  },
  {
    id: "week-5",
    date: "Week 5 — Challenge 6",
    title: "Experiment and Take Risks",
    description:
      "We organized a healthy eating workshop for students, presenting on nutrition principles and steps to adopt a healthier diet.",
    content:
      "We took a bold step by organizing a full workshop event on campus dedicated to healthy eating. The session featured a presentation covering topics like replacing processed food with fresh ingredients, meal planning for a balanced diet, and maintaining consistency in healthy habits. The event attracted a large group of students who actively participated in the discussion. The key message: eating healthy is not just a diet — it's a lifestyle!",
    hasWorkshopGallery: true,
    vimeoId: "1175890873",
  },
  {
    id: "week-6",
    date: "Week 6 — Challenge 7",
    title: "Foster Collaboration",
    description:
      "We strengthened teamwork and built collaborative partnerships by reaching out to organizations and securing a nutrition expert workshop.",
    content:
      "As part of our effort to build meaningful partnerships, we contacted three organizations: the NU Cooking Club (proposing a hands-on cooking workshop or cook-off event), Cult Academy (proposing a professional chef-led workshop and chef interview), and the University Health Center (requesting an interview/discussion session with a nutritionist). In parallel, we invited a recognized Kazakhstan-based nutrition specialist with experience helping over 1,000 women improve their body composition, digestion, and well-being. She has officially agreed to conduct a workshop after March 10. The session will include a structured lecture on balanced nutrition, sustainable weight management, and gut health, followed by an interactive Q&A. The exact date and format (offline/online) will be confirmed soon.",
    hasOutreachSection: true,
  },
  {
    id: "week-7",
    date: "Week 7 — Challenges 8, 9 & 10",
    title: "Strengthen Others, Recognize Contributions & Celebrate Values",
    description:
      "We wrapped up by empowering others, recognizing everyone's contributions, and celebrating the values that guided our journey.",
    content: "",
  },
];
