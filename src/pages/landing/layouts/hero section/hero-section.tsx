import React, { useRef, useState } from "react";
import CtaButton from "../../../../components/ctabtn/ctabtn";
import styles from "./hero.module.css";
import trailer from "../../../../assets/trailer.mp4";
import person1 from "../../../../assets/bot1.png";
import person2 from "../../../../assets/bot2.png";
import person3 from "../../../../assets/bot3.png";

const HeroSection: React.FC = () => {
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

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.tag}>
            <div>
              <img src={person1} alt="" />
              <img src={person2} alt="" />
              <img src={person3} alt="" />
            </div>
            12000+ Members
          </span>
          <h1>
            Top E-Learning <span> Academy</span> in Tunisia
          </h1>
          <p>
            In a fast-moving world, staying ahead means mastering skills that
            create real value. Join Tunisian Top G’s Academy and unlock your
            path to success through expert-led courses and hands-on learning.
          </p>
          <CtaButton
            text="Join tunisian Top G's"
            link="app.tunisianTopGs"
          ></CtaButton>
        </div>

        <div className={styles.heroVideo}>
          <video
            onClick={handlePlayClick}
            ref={videoRef}
            src={trailer}
            autoPlay
            muted
            loop
            controls={hasUserInteracted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          ></video>

          {!hasUserInteracted && (
            <div className={styles.videoOverlay} onClick={handlePlayClick}>
              <button className={styles.playButton}>
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
