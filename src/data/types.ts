export interface Course {
  title: string;
  video: string;
  thumbnail: string;
  description: string;
}

export interface Feedback {
  type: "image" | "video";
  img?: string;
  video?: string;
  thumbnail?: string;
  alt: string;
}

export interface Plan {
  title: string;
  price: number;
  description: string;
  features: string[];
}

export interface Question {
  qst: string;
  answear: string;
}

export interface VoiceFeedback {
  id: number;
  studentName: string;
  audioSrc: string;
  duration: string;
  testimonial: string;
}

export interface CarouselVideo {
  id: number;
  title: string;
  description: string;
  video: string;
  thumbnail: string;
  category: string;
  duration: string;
  featured: boolean;
}
