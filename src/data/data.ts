import type { Plan, Question, VoiceFeedback } from "./types";

export const Plans: Plan[] = [
  {
    title: "1 month plan",
    price: 700,
    description:
      "3andek access lel courses el kol chhar kemil Trading, UIUX Web Design, Web Development, Graphic design.",
    features: [
      "Weekly Voice Lessons.",
      "Access to The VIP Section on Discord (Lifetime)",
      "Suivi Kemla men TTG Professors.",
    ],
  },
  {
    title: "3 months plan",
    price: 1200,
    description:
      "3andek access lel courses el kol 3 chhour kemillin Trading, UIUX Web Design, Web Development, Graphic design.",
    features: [
      "Weekly Voice Lessons.",
      "Access to The VIP Section on Discord (Lifetime)",
      "Suivi Kemla men TTG Professors.",
      "Access to the weekly meetings and Live sessions",
      "Private Sessions",
      "Free Trading Book",
    ],
  },
  {
    title: "6 months plan",
    price: 1990,
    description:
      "3andek access lel courses el kol 6 chhour kemilin. Trading, UIUX Web Design, Web Development, Graphic design.",
    features: [
      "Weekly Voice Lessons.",
      "Access to The VIP Section on Discord (Lifetime)",
      "Suivi Kemla men TTG Professors.",
      "Access to the weekly meetings and Live sessions",
      "Private Sessions",
      "Free Trading Book",
      "Free Trading Book",
      "Free Trading Book",
    ],
  },
];

export const Questions: Question[] = [
  {
    qst: "How long does the course last?",
    answear:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    qst: "What is the cost of the course?",
    answear:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    qst: "Can I finish the course in 1 month?",
    answear:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    qst: "What language is the course offered in?",
    answear:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const VoiceFeedbacks: VoiceFeedback[] = [
  {
    id: 1,
    studentName: "Ahmed Ben Ali",
    audioSrc: "/audio/feedback1.mp3",
    duration: "2:15",
    testimonial:
      "TTG Academy completely changed my life. I learned trading and now I'm making consistent profits.",
  },
  {
    id: 2,
    studentName: "Sara Mansouri",
    audioSrc: "/audio/feedback2.mp3",
    duration: "1:45",
    testimonial:
      "The web development course was amazing. I got my first job after completing the program.",
  },
  {
    id: 3,
    studentName: "Mohamed Trabelsi",
    audioSrc: "/audio/feedback3.mp3",
    duration: "3:02",
    testimonial:
      "UI/UX design course opened new opportunities for me. Highly recommended!",
  },
  {
    id: 4,
    studentName: "Amina Jebali",
    audioSrc: "/audio/feedback4.mp3",
    duration: "2:30",
    testimonial:
      "The community support and mentorship made all the difference in my learning journey.",
  },
  {
    id: 5,
    studentName: "Youssef Khlifi",
    audioSrc: "/audio/feedback5.mp3",
    duration: "1:58",
    testimonial:
      "From zero to hero in graphic design. The instructors are world-class professionals.",
  },
];
