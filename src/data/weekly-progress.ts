export interface WeeklyEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  content: string;
  pdfUrl?: string;
  vimeoId?: string | string[];
  videoCaption?: string;
  surveyFormUrl?: string;
  hasSurveyResults?: boolean;
  hasOutreachSection?: boolean;
  hasWorkshopGallery?: boolean;
  hasWeek7Gallery?: boolean;
  hasCertificatesGallery?: boolean;
  hasCelebrationGallery?: boolean;
  hasNutritionistOutreach?: boolean;
  hasBuddyMarathon?: boolean;
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
      "We identified current gaps in student nutrition by conducting a campus-wide survey with 31 respondents and actively searched for nutrition experts to collaborate with.",
    content:
      "To understand the real challenges students face with healthy eating, we created a comprehensive poll and shared it across campus. The survey covered demographics, nutrition knowledge, food accessibility, barriers, and potential solutions. Key findings revealed that lack of motivation (58.1%), lack of time (67.7%), and cost (35.5%) are the biggest barriers. Social media (77.4%) is the primary source of nutrition information, and most students want discounts for healthy food (67.7%) and more affordable campus options.\n\nAs part of searching for opportunities, we actively reached out to multiple nutritionists and dietologists via Instagram — including doctor_sabitovaleila, dietolog_muhiddin, aitymzhakupov, aiman_dietolog, and nutriciolog_kazhenova — inviting them to share their expertise with students at Nazarbayev University. We explained our project goals and proposed various collaboration formats: offline/online interviews, master classes, workshops, and video Q&A sessions.\n\nBuilding on these survey insights, we conducted a short interview with a fellow student who has personal experience maintaining a healthy lifestyle. We asked how she navigates the very barriers our respondents highlighted — staying motivated, managing time, and eating well on a budget — to share practical, relatable advice with our audience.",
    surveyFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSck6fBdUnvZ8nCKPqYrMhkVP9k1G4UTlTW5d5s9lLzv0-Vo_w/viewform?usp=header",
    hasSurveyResults: true,
    hasNutritionistOutreach: true,
    vimeoId: "1176892753",
    videoCaption: "Building on the survey findings above, we interviewed our Leadership course teacher who actively maintains a healthy lifestyle. We asked how she overcomes the very barriers our respondents highlighted — staying motivated, managing time, and eating well on a budget — to share practical, relatable advice.",
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
    vimeoId: ["1175890873", "1176204589"],
  },
  {
    id: "week-6",
    date: "Week 6 — Challenge 7",
    title: "Foster Collaboration",
    description:
      "We strengthened teamwork and built collaborative partnerships by reaching out to organizations and securing a nutrition expert workshop.",
    content:
      "As part of our effort to build meaningful partnerships, we contacted three organizations: the NU Cooking Club (proposing a hands-on cooking workshop or cook-off event), Cult Academy (proposing a professional chef-led workshop and chef interview), and the University Health Center (requesting an interview/discussion session with a nutritionist). In parallel, we invited a recognized Kazakhstan-based nutrition specialist with experience helping over 1,000 women improve their body composition, digestion, and well-being. She has officially agreed to conduct a workshop after March 10. The session will include a structured lecture on balanced nutrition, sustainable weight management, and gut health, followed by an interactive Q&A. The exact date and format (offline/online) will be confirmed soon.\n\nThe core problem we aimed to address was awareness — our survey revealed that many students lacked reliable knowledge about nutrition. To maximize attendance and engagement, we allocated a budget of 10,000 KZT for prizes, which served as an incentive to attract more students to the workshop. This strategy proved effective in boosting turnout.\n\nThe workshop took place and covered several important topics:\n\n• Avoid sugary drinks — they are one of the biggest dietary problems, as they spike insulin levels rapidly (being the fastest carbohydrate)\n• White bread significantly raises blood sugar levels\n• It's worth eliminating sunflower oil from your diet\n• The importance of sleep between 11 PM and 2 AM for recovery and metabolism\n• The role of Vitamin D3 and Omega fatty acids in overall health\n• Magnesium glycinate as a recommended supplement\n\nThe workshop gave students practical, actionable advice they could immediately apply to their daily routines.\n\nAfterwards, we expressed our gratitude to the nutritionist: \"Thank you very much for today's lecture. I think you explained the topic of a healthy lifestyle in a very interesting and unique way.\"",
    hasOutreachSection: true,
    hasWeek7Gallery: true,
    vimeoId: "1178978230",
  },
  {
    id: "week-7-ch8",
    date: "Week 7 — Challenge 8",
    title: "Strengthen Others",
    description:
      "We empowered students to take action through a 'Buddy Marathon' — pairing participants to support each other in building healthy eating habits.",
    content:
      "We decided to not only inform people but also empower them to take action and support each other. Based on gaps identified in Challenge 5, especially the lack of discipline, we created a \"Buddy Marathon.\" We divided participants into pairs so that each person would support and monitor their partner in practicing one specific healthy eating habit for a week. The aim was to help them stay on track — pairing reduces the fear and isolation.\n\nWe also created a Telegram group so people without a partner could find one and so that a small community of healthy eaters could grow. In the group, participants shared photos and/or written reports about what they achieved or failed, which encouraged responsibility. They experienced peer learning in this community.\n\nWe invited students to join the marathon during our workshops (Challenges 6 and 7) and by sending invitation messages to groups. In the middle of the marathon, we collected feedback from participants to understand their progress and to see how this activity strengthened their confidence and skills.",
    hasBuddyMarathon: true,
  },
  {
    id: "week-7-ch9",
    date: "Week 7 — Challenge 9",
    title: "Recognize Contributions",
    description:
      "We created personalized certificates of achievement for each team member, acknowledging their unique contributions to the project.",
    content:
      "We created personalized certificates of achievement for each team member, acknowledging their unique contributions to the project. This was our way of saying thank you and recognizing the hard work everyone put in throughout the journey.",
    hasCertificatesGallery: true,
    vimeoId: "1179835875",
  },
  {
    id: "week-7-ch10",
    date: "Week 7 — Challenge 10",
    title: "Celebrate Values",
    description:
      "We celebrated our shared values with a team dinner and reflected on how our core values guided us throughout the journey.",
    content:
      "We celebrated our shared values with a team dinner, shared our honest opinions about the experience, and reflected on how Responsibility, Discipline, Awareness, Self-respect, and Community impact guided us throughout.",
    hasCelebrationGallery: true,
    vimeoId: "1179683902",
  },
];
