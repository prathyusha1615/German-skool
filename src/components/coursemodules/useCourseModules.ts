export type ModuleLevel = {
  id: "beginner" | "intermediate" | "advanced";
  heading: string;        // e.g., "Beginner (A1–A2)"
  title: string;          // short label for the row (Beginner / Intermediate / Advanced)
  description: string;
  image: string;          // path in /public (568×436 recommended)
  chips: string[];
  chipBg?: string; 
};

const LEVELS: ModuleLevel[] = [
  {
    id: "beginner",
    title: "Beginner",
    heading: "Beginner (A1–A2)",
    description:
      "You’ll be able to introduce yourself, ask simple questions, and understand common phrases.",
    image: "https://media.onlinegermanskool.com/assets/image1.svg",
    chips: ["Greetings", "Numbers", "Shopping", "Family", "Travel"],
    chipBg: "#70565633", 
  },
  {
    id: "intermediate",
    title: "Intermediate",
    heading: "Intermediate (B1–B2)",
    description:
      "Speak confidently in most everyday situations, understand TV/radio, and write structured texts.",
    image: "https://media.onlinegermanskool.com/assets/image2.svg",
    chips: ["Work", "Study", "Hobbies", "Expressing Opinions", "German Culture"],
    chipBg: "#70565633", 
  },
  {
    id: "advanced",
    title: "Advanced",
    heading: "Advanced (C1–C2)",
    description:
      "Understand complex texts, express ideas fluently, and work/study in German-speaking countries.",
    image: "https://media.onlinegermanskool.com/assets/image3.svg",
    chips: ["Advanced Grammar", "Academic Writing", "Professional Communication"],
    chipBg: "#70565633", 
  },
];

export default function useCourseModules() {
  return {
    items: LEVELS,
    UI: {
      // colors pulled from your design tokens
      captionBorder: "#E0DFE3",
      captionBg: "#F0EFF1",
      captionText: "#6B6A70",
      primaryText: "#242325",
      secondaryText: "#47464A",
      brand: "#984DDD",
      divider: "#D1D0D6",
    },
  };
}
