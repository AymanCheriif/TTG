import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./course.module.css";
import img from "../../assets/module.png";
import figma from "../../assets/figma_glossy.png";
import code from "../../assets/code_glossy.png";
import ps from "../../assets/ps_glossy.png";
import btc from "../../assets/gtc_glossy.png";
import CtaButton from "../../components/ctabtn/ctabtn";
import FAQSection from "../landing/layouts/FAQ section/FAQSection";

// Correct usage: annotate the component with React.FC
const Course: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!hasUserInteracted) {
        videoRef.current.muted = false;
        videoRef.current.controls = true;
        setHasUserInteracted(true);
      }

      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Course data mapping
  const courseData: Record<
    string,
    {
      title: string;
      highlightWords: string[];
      description: string;
      tagline: string;
      floatingIcon: {
        src: string;
        alt: string;
        id: string;
      };
    }
  > = {
    "1": {
      title: "Trading And Crypto Master Class",
      highlightWords: ["Trading", "Crypto"],
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdod, w walli version a9wa men rouhek",
      tagline: "1000+ Students",
      floatingIcon: { src: btc, alt: "Bitcoin", id: "bitcoin" },
    },
    "2": {
      title: "UI/UX Web Design Master Class",
      highlightWords: ["UI/UX", "Design"],
      description:
        "Learn professional UI/UX design skills with the latest tools and methodologies used by top designers worldwide.",
      tagline: "500+ Students",
      floatingIcon: { src: figma, alt: "Figma", id: "figma" },
    },
    "3": {
      title: "Web Development Full Stack Course",
      highlightWords: ["Development", "Full Stack"],
      description:
        "From frontend to backend, learn the complete web development stack and build real-world applications.",
      tagline: "750+ Students",
      floatingIcon: { src: code, alt: "Code", id: "code" },
    },
    "4": {
      title: "Graphic Design Essentials Course",
      highlightWords: ["Graphic", "Design"],
      description:
        "Create stunning visuals with Photoshop and other design tools used by professional designers.",
      tagline: "300+ Students",
      floatingIcon: { src: ps, alt: "Photoshop", id: "photoshop" },
    },
  };

  // Get current course data or default to course 1
  const currentCourse = courseData[courseId || "1"] || courseData["1"];

  // Function to render title with highlighted words
  const renderTitle = (title: string, highlightWords: string[]) => {
    const parts = title.split(new RegExp(`(${highlightWords.join("|")})`, "i"));
    return parts.map((part, i) => {
      const isHighlight = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );
      return isHighlight ? <span key={i}>{part}</span> : part;
    });
  };
  const Modules = [
    {
      title: "Introduction to Cryptocurrency and Trading Basics",
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin, w walli version a9wa men rouhek",
      img: img,
    },
    {
      title: "Introduction to Cryptocurrency and Trading Basics",
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin, w walli version a9wa men rouhek",
      img: img,
    },
    {
      title: "Introduction to Cryptocurrency and Trading Basics",
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin, w walli version a9wa men rouhek",
      img: img,
    },
    {
      title: "Introduction to Cryptocurrency and Trading Basics",
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin, w walli version a9wa men rouhek",
      img: img,
    },
    {
      title: "Introduction to Cryptocurrency and Trading Basics",
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin, w walli version a9wa men rouhek",
      img: img,
    },
    {
      title: "Introduction to Cryptocurrency and Trading Basics",
      description:
        "A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin, w walli version a9wa men rouhek",
      img: img,
    },
  ];

  return (
    <>
      <div className={styles.hero_image}></div>
      <section className={styles.hero_section} id="hero">
        <div className={styles.section_container}>
          <div className={styles.text_cont}>
            {/* <img src={rocket} alt="rocket image" id={styles.rocket} /> */}
            <span className={styles.tagline}>{currentCourse.tagline}</span>
            <h1 className={styles.title}>
              {renderTitle(currentCourse.title, currentCourse.highlightWords)}
            </h1>
            <p className={styles.description}>{currentCourse.description}</p>
          </div>
          <div className={styles.video_cont}>
            <video
              onClick={handlePlayClick}
              ref={videoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              muted
              loop
              controls={hasUserInteracted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className={styles.hero_video}
            ></video>
            <div className={styles.videoOverlay}>
              {!hasUserInteracted && (
                <button className={styles.playButton} onClick={handlePlayClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M25.9999 4.33301C21.7147 4.33301 17.5256 5.60374 13.9626 7.9845C10.3995 10.3653 7.62244 13.7491 5.98254 17.7082C4.34264 21.6673 3.91357 26.0237 4.74958 30.2266C5.58559 34.4296 7.64914 38.2902 10.6793 41.3203C13.7094 44.3505 17.5701 46.414 21.773 47.25C25.9759 48.086 30.3323 47.657 34.2914 46.0171C38.2505 44.3772 41.6343 41.6001 44.0151 38.037C46.3959 34.474 47.6666 30.2849 47.6666 25.9997C47.6666 23.1544 47.1062 20.3369 46.0173 17.7082C44.9285 15.0795 43.3325 12.691 41.3206 10.679C39.3086 8.66709 36.9201 7.07114 34.2914 5.98228C31.6627 4.89343 28.8452 4.33301 25.9999 4.33301ZM21.6666 35.7497V16.2497L34.6666 25.9997L21.6666 35.7497Z"
                      fill="white"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <CtaButton link="/" text="join tuisian top g's"></CtaButton>
        </div>
      </section>

      <section className={styles.courses_section} id="modules">
        <div className={styles.section_container}>
          <div className={styles.text_cont}>
            <span className={styles.tagline}>Courses</span>
            <h1 className={styles.title}>what you will learn in this course</h1>
            <p className={styles.description}>
              A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdod, w
              walli version a9wa men rouhek
            </p>
          </div>
          <div className={styles.courses_cont}>
            {Modules.map((module, idx) => (
              <div className={styles.course_card} key={idx}>
                <h2 className={styles.course_title}>{module.title}</h2>
                <p className={styles.description}>{module.description}</p>
                <img
                  src={module.img}
                  alt="module image"
                  className={styles.course_img}
                />
              </div>
            ))}
          </div>
          <CtaButton link="/" text="join tuisian top g's"></CtaButton>
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default Course;
