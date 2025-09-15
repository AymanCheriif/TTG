import React from "react";
import HeroSection from "./layouts/hero section/hero-section";
import FeedbackVideos from "./layouts/feedback section videos/feedbackVideos";
import DiscordSection from "./layouts/discord section/discord_section";
import PlatformSection from "./layouts/platform section/platfrom_section";
import FeedbacksTextSection from "./layouts/feedbacks text section/feedbacksTextSection";
import CoursesSection from "./layouts/courses section/courses_section";
import VoiceFeedbackSection from "./layouts/voice section/voice_feedback_section";
import PlanSection from "./layouts/plans section/plans_section";
import FAQSection from "./layouts/FAQ section/FAQSection";

const Landing: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeedbackVideos />
      <DiscordSection />
      <PlatformSection />
      <FeedbacksTextSection />
      <CoursesSection />
      <VoiceFeedbackSection />
      <PlanSection />
      <FAQSection />
    </>
  );
};

export default Landing;
