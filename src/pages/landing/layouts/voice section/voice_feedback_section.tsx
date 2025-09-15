import React, { useState, useRef, useEffect } from "react";
import styles from "./voice_feedback_section.module.css";
import voiceImage from "../../../../assets/wins.png";
import { VoiceFeedbacks } from "../../../../data/data";

const VoiceFeedbackSection: React.FC = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState<number>(Date.now());
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentFeedback = VoiceFeedbacks[currentFeedbackIndex];
  const voiceAudioSrc = currentFeedback.audioSrc;

  // Function to format time in MM:SS format
  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Helper function to ensure loading shows for exactly 2 seconds
  const ensureMinimumLoadingTime = (callback: () => void) => {
    const elapsedTime = Date.now() - loadingStartTime;
    const remainingTime = Math.max(0, 2000 - elapsedTime);

    setTimeout(callback, remainingTime);
  };

  const resetAudioState = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);
    setIsLoading(true);
    setError(null);
    setLoadingStartTime(Date.now()); // Reset loading timer
  };

  const goToPreviousFeedback = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    resetAudioState();

    // Show loading spinner for 2 seconds
    setTimeout(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === 0 ? VoiceFeedbacks.length - 1 : prevIndex - 1
      );
    }, 500); // Small delay before changing the audio source

    setTimeout(() => setIsTransitioning(false), 2300); // Total transition time
  };

  const goToNextFeedback = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    resetAudioState();

    // Show loading spinner for 2 seconds
    setTimeout(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === VoiceFeedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Small delay before changing the audio source

    setTimeout(() => setIsTransitioning(false), 2300); // Total transition time
  };

  const togglePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.error("Error playing audio:", err);
        setError("Unable to play audio");
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;

      if (!isNaN(current) && !isNaN(total) && total > 0) {
        const progressPercentage = (current / total) * 100;
        setCurrentTime(current);
        setProgress(progressPercentage);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
      // Ensure loading spinner shows for minimum 2 seconds
      ensureMinimumLoadingTime(() => {
        setIsLoading(false);
        setError(null);
      });
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const newTime = percentage * duration;

      audioRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const handleError = () => {
    setError("Failed to load audio file");
    // Still ensure minimum loading time even on error
    ensureMinimumLoadingTime(() => {
      setIsLoading(false);
    });
  };

  const handleCanPlay = () => {
    // Always ensure minimum 2 second loading time
    ensureMinimumLoadingTime(() => {
      setIsLoading(false);
      setError(null);
    });
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Add all event listeners
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("error", handleError);
      audio.addEventListener("canplay", handleCanPlay);

      return () => {
        // Clean up event listeners
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("error", handleError);
        audio.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  // Initial loading effect
  useEffect(() => {
    setLoadingStartTime(Date.now());
  }, []);

  // Effect to handle audio source changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      setLoadingStartTime(Date.now()); // Reset timer when audio source changes
      setIsLoading(true); // Ensure loading state is active
      audio.load(); // Reload the audio element with new source
    }
  }, [currentFeedbackIndex]);

  return (
    <section className={styles.voiceFeedbackSection}>
      <div className={styles.voiceFeedbackContent}>
        <div className={styles.imageContainer}>
          <img src={voiceImage} alt="voice feedback image" />
        </div>
        <div className={styles.textContent}>
          <span className={styles.tag}>Voice Testimonials</span>
          <h1>
            Hear from Our <span>Successful Students</span>
          </h1>
          <p>
            Real voices, real success stories. Listen to how our students have
            transformed their careers and achieved their goals through Tunisian
            Top G's Academy. Your success story could be next.
          </p>

          {/* <div
            className={`${styles.studentInfo} ${
              isTransitioning || isLoading ? styles.transitioning : ""
            }`}
          >
            <div className={styles.studentDetails}>
              <h3 className={styles.studentName}>
                {currentFeedback.studentName}
              </h3>
              <p className={styles.studentTestimonial}>
                "{currentFeedback.testimonial}"
              </p>
              <div className={styles.feedbackCounter}>
                {isLoading
                  ? "Loading..."
                  : `${currentFeedbackIndex + 1} of ${VoiceFeedbacks.length}`}
              </div>
            </div>
          </div> */}
          <div className={styles.customAudioPlayer}>
            <button
              className={styles.playButton}
              onClick={togglePlayPause}
              disabled={isLoading || !!error}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isLoading ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M12 2a10 10 0 0 1 10 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 12 12"
                      to="360 12 12"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              ) : error ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                  <rect
                    x="14"
                    y="4"
                    width="4"
                    height="16"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              )}
            </button>
            <div
              className={styles.progressContainer}
              onClick={handleProgressClick}
            >
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className={styles.timeDisplay}>
              <span className={styles.currentTime}>
                {formatTime(currentTime)}
              </span>
              <span className={styles.timeSeparator}>/</span>
              <span className={styles.totalTime}>{formatTime(duration)}</span>
            </div>
            <audio ref={audioRef} preload="metadata" crossOrigin="anonymous">
              <source src={voiceAudioSrc} type="audio/mpeg" />
              <source src={voiceAudioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <div className={styles.actions}>
            <button
              className={`${styles.leftbtn} ${
                isTransitioning ? styles.disabled : ""
              }`}
              onClick={goToPreviousFeedback}
              disabled={isTransitioning}
              aria-label="Previous feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.3063 5.38427L5.30628 12.3843M5.30628 12.3843L12.3063 19.3843M5.30628 12.3843L19.3063 12.3843"
                  stroke="white"
                  strokeWidth="2.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={`${styles.rightbtn} ${
                isTransitioning ? styles.disabled : ""
              }`}
              onClick={goToNextFeedback}
              disabled={isTransitioning}
              aria-label="Next feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.3062 19.3843L19.3062 12.3843M19.3062 12.3843L12.3062 5.38428M19.3062 12.3843L5.30615 12.3843"
                  stroke="white"
                  strokeWidth="2.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceFeedbackSection;
