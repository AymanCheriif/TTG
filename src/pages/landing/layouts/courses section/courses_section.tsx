import React, { useState, useRef, useEffect } from "react";
import styles from "./courses_section.module.css";
import CtaButton from "../../../../components/ctabtn/ctabtn";

const CoursesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [isLoading, setIsLoading] = useState(true);

  const courses = [
    {
      id: 1,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      courseName: "Web Development Mastery",
    },
    {
      id: 2,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      courseName: "Mobile App Development",
    },
    {
      id: 3,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      courseName: "Digital Marketing Pro",
    },
  ];

  useEffect(() => {
    triggerLoading();
  }, []);

  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const nextSlide = () => {
    triggerLoading();
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    triggerLoading();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    triggerLoading();
    setCurrentIndex(index);
  };

  const handlePlayClick = (videoIndex: number) => {
    const videoElement = videoRefs.current[videoIndex];
    const videoSrc = courses[videoIndex]?.src;

    if (videoElement && videoSrc) {
      if (playingVideos.has(videoSrc)) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }
  };

  const handleVideoPlay = (videoKey: string) => {
    setPlayingVideos((prev) => new Set(prev).add(videoKey));
  };

  const handleVideoPause = (videoKey: string) => {
    setPlayingVideos((prev) => {
      const newSet = new Set(prev);
      newSet.delete(videoKey);
      return newSet;
    });
  };

  return (
    <section className={styles.coursesSection}>
      <div className={styles.courseContainer}>
        <div className={styles.textContent}>
          <span className={styles.tag}>TTG courses</span>
          <h1>
            What you will <span>learn</span>
          </h1>
          <p>
            In a fast-moving world, staying ahead means mastering skills that
            create real value. Join Tunisian Top G’s Academy and unlock your
            path to success through expert-led courses and hands-on learning.
          </p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselButtons}>
            <button className={styles.btnLeft} onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M17.0002 7.08366L7.0835 17.0003M7.0835 17.0003L17.0002 26.917M7.0835 17.0003L26.9168 17.0003"
                  stroke="white"
                  strokeWidth="2.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className={styles.btnRight} onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M17.0001 26.9163L26.9167 16.9997M26.9167 16.9997L17.0001 7.08301M26.9167 16.9997L7.08341 16.9997"
                  stroke="white"
                  strokeWidth="2.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={styles.carouselCourses}>
            <div className={`${styles.courseItem}`}>
              <div className={styles.courseContainer}>
                <video
                  ref={(el) => {
                    const prevIndex =
                      currentIndex === 0
                        ? courses.length - 1
                        : currentIndex - 1;
                    videoRefs.current[prevIndex] = el;
                  }}
                  src={
                    courses[
                      currentIndex === 0 ? courses.length - 1 : currentIndex - 1
                    ]?.src
                  }
                  onPlay={() =>
                    handleVideoPlay(
                      courses[
                        currentIndex === 0
                          ? courses.length - 1
                          : currentIndex - 1
                      ]?.src
                    )
                  }
                  onPause={() =>
                    handleVideoPause(
                      courses[
                        currentIndex === 0
                          ? courses.length - 1
                          : currentIndex - 1
                      ]?.src
                    )
                  }
                  onClick={() =>
                    handlePlayClick(
                      currentIndex === 0 ? courses.length - 1 : currentIndex - 1
                    )
                  }
                />
                {isLoading ? (
                  <div className={styles.spinnerOverlay}>
                    <div className={styles.spinner}></div>
                  </div>
                ) : (
                  <div
                    className={styles.courseOverlay}
                    style={{
                      pointerEvents: playingVideos.has(
                        courses[
                          currentIndex === 0
                            ? courses.length - 1
                            : currentIndex - 1
                        ]?.src
                      )
                        ? "none"
                        : "auto",
                    }}
                  >
                    {!playingVideos.has(
                      courses[
                        currentIndex === 0
                          ? courses.length - 1
                          : currentIndex - 1
                      ]?.src
                    ) && (
                      <button
                        className={styles.playButton}
                        onClick={() =>
                          handlePlayClick(
                            currentIndex === 0
                              ? courses.length - 1
                              : currentIndex - 1
                          )
                        }
                      >
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
                )}
              </div>
              <div className={styles.courseName}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 23.0333L10.4666 26.3666C10.2222 26.5222 9.96662 26.5888 9.69995 26.5666C9.43328 26.5444 9.19995 26.4555 8.99995 26.2999C8.79995 26.1444 8.64439 25.9502 8.53328 25.7173C8.42217 25.4844 8.39995 25.223 8.46662 24.9333L9.93328 18.6333L5.03328 14.3999C4.81106 14.1999 4.67239 13.9719 4.61728 13.7159C4.56217 13.4599 4.57862 13.2102 4.66662 12.9666C4.75462 12.723 4.88795 12.523 5.06662 12.3666C5.24528 12.2102 5.48973 12.1102 5.79995 12.0666L12.2666 11.4999L14.7666 5.5666C14.8777 5.29994 15.0502 5.09993 15.284 4.9666C15.5177 4.83327 15.7564 4.7666 16 4.7666C16.2435 4.7666 16.4822 4.83327 16.716 4.9666C16.9497 5.09993 17.1222 5.29994 17.2333 5.5666L19.7333 11.4999L26.1999 12.0666C26.5111 12.111 26.7555 12.211 26.9333 12.3666C27.1111 12.5222 27.2444 12.7222 27.3333 12.9666C27.4222 13.211 27.4391 13.4613 27.3839 13.7173C27.3288 13.9733 27.1897 14.2008 26.9666 14.3999L22.0666 18.6333L23.5333 24.9333C23.6 25.2222 23.5777 25.4835 23.4666 25.7173C23.3555 25.951 23.2 26.1453 23 26.2999C22.8 26.4546 22.5666 26.5435 22.3 26.5666C22.0333 26.5897 21.7777 26.523 21.5333 26.3666L16 23.0333Z"
                    fill="white"
                  />
                </svg>
                <span>
                  {
                    courses[
                      currentIndex === 0 ? courses.length - 1 : currentIndex - 1
                    ]?.courseName
                  }
                </span>
              </div>
            </div>
            <div className={`${styles.courseItem} ${styles.active}`}>
              <div className={styles.courseContainer}>
                <video
                  ref={(el) => {
                    videoRefs.current[currentIndex] = el;
                  }}
                  src={courses[currentIndex].src}
                  onPlay={() => handleVideoPlay(courses[currentIndex].src)}
                  onPause={() => handleVideoPause(courses[currentIndex].src)}
                  onClick={() => handlePlayClick(currentIndex)}
                />
                {isLoading ? (
                  <div className={styles.spinnerOverlay}>
                    <div className={styles.spinner}></div>
                  </div>
                ) : (
                  <div
                    className={styles.courseOverlay}
                    style={{
                      pointerEvents: playingVideos.has(
                        courses[currentIndex].src
                      )
                        ? "none"
                        : "auto",
                    }}
                    onClick={() => handlePlayClick(currentIndex)}
                  >
                    {!playingVideos.has(courses[currentIndex].src) && (
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
                    )}
                  </div>
                )}
              </div>
              <div className={styles.courseName}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 23.0333L10.4666 26.3666C10.2222 26.5222 9.96662 26.5888 9.69995 26.5666C9.43328 26.5444 9.19995 26.4555 8.99995 26.2999C8.79995 26.1444 8.64439 25.9502 8.53328 25.7173C8.42217 25.4844 8.39995 25.223 8.46662 24.9333L9.93328 18.6333L5.03328 14.3999C4.81106 14.1999 4.67239 13.9719 4.61728 13.7159C4.56217 13.4599 4.57862 13.2102 4.66662 12.9666C4.75462 12.723 4.88795 12.523 5.06662 12.3666C5.24528 12.2102 5.48973 12.1102 5.79995 12.0666L12.2666 11.4999L14.7666 5.5666C14.8777 5.29994 15.0502 5.09993 15.284 4.9666C15.5177 4.83327 15.7564 4.7666 16 4.7666C16.2435 4.7666 16.4822 4.83327 16.716 4.9666C16.9497 5.09993 17.1222 5.29994 17.2333 5.5666L19.7333 11.4999L26.1999 12.0666C26.5111 12.111 26.7555 12.211 26.9333 12.3666C27.1111 12.5222 27.2444 12.7222 27.3333 12.9666C27.4222 13.211 27.4391 13.4613 27.3839 13.7173C27.3288 13.9733 27.1897 14.2008 26.9666 14.3999L22.0666 18.6333L23.5333 24.9333C23.6 25.2222 23.5777 25.4835 23.4666 25.7173C23.3555 25.951 23.2 26.1453 23 26.2999C22.8 26.4546 22.5666 26.5435 22.3 26.5666C22.0333 26.5897 21.7777 26.523 21.5333 26.3666L16 23.0333Z"
                    fill="white"
                  />
                </svg>
                <span>{courses[currentIndex].courseName}</span>
              </div>
            </div>
            <div className={`${styles.courseItem}`}>
              <div className={styles.courseContainer}>
                <video
                  ref={(el) => {
                    const nextIndex =
                      currentIndex === courses.length - 1
                        ? 0
                        : currentIndex + 1;
                    videoRefs.current[nextIndex] = el;
                  }}
                  src={
                    courses[
                      currentIndex === courses.length - 1 ? 0 : currentIndex + 1
                    ]?.src
                  }
                  onPlay={() =>
                    handleVideoPlay(
                      courses[
                        currentIndex === courses.length - 1
                          ? 0
                          : currentIndex + 1
                      ]?.src
                    )
                  }
                  onPause={() =>
                    handleVideoPause(
                      courses[
                        currentIndex === courses.length - 1
                          ? 0
                          : currentIndex + 1
                      ]?.src
                    )
                  }
                  onClick={() =>
                    handlePlayClick(
                      currentIndex === courses.length - 1 ? 0 : currentIndex + 1
                    )
                  }
                />
                {isLoading ? (
                  <div className={styles.spinnerOverlay}>
                    <div className={styles.spinner}></div>
                  </div>
                ) : (
                  <div
                    className={styles.courseOverlay}
                    style={{
                      pointerEvents: playingVideos.has(
                        courses[
                          currentIndex === courses.length - 1
                            ? 0
                            : currentIndex + 1
                        ]?.src
                      )
                        ? "none"
                        : "auto",
                    }}
                  >
                    {!playingVideos.has(
                      courses[
                        currentIndex === courses.length - 1
                          ? 0
                          : currentIndex + 1
                      ]?.src
                    ) && (
                      <button
                        className={styles.playButton}
                        onClick={() =>
                          handlePlayClick(
                            currentIndex === courses.length - 1
                              ? 0
                              : currentIndex + 1
                          )
                        }
                      >
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
                )}
              </div>
              <div className={styles.courseName}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 23.0333L10.4666 26.3666C10.2222 26.5222 9.96662 26.5888 9.69995 26.5666C9.43328 26.5444 9.19995 26.4555 8.99995 26.2999C8.79995 26.1444 8.64439 25.9502 8.53328 25.7173C8.42217 25.4844 8.39995 25.223 8.46662 24.9333L9.93328 18.6333L5.03328 14.3999C4.81106 14.1999 4.67239 13.9719 4.61728 13.7159C4.56217 13.4599 4.57862 13.2102 4.66662 12.9666C4.75462 12.723 4.88795 12.523 5.06662 12.3666C5.24528 12.2102 5.48973 12.1102 5.79995 12.0666L12.2666 11.4999L14.7666 5.5666C14.8777 5.29994 15.0502 5.09993 15.284 4.9666C15.5177 4.83327 15.7564 4.7666 16 4.7666C16.2435 4.7666 16.4822 4.83327 16.716 4.9666C16.9497 5.09993 17.1222 5.29994 17.2333 5.5666L19.7333 11.4999L26.1999 12.0666C26.5111 12.111 26.7555 12.211 26.9333 12.3666C27.1111 12.5222 27.2444 12.7222 27.3333 12.9666C27.4222 13.211 27.4391 13.4613 27.3839 13.7173C27.3288 13.9733 27.1897 14.2008 26.9666 14.3999L22.0666 18.6333L23.5333 24.9333C23.6 25.2222 23.5777 25.4835 23.4666 25.7173C23.3555 25.951 23.2 26.1453 23 26.2999C22.8 26.4546 22.5666 26.5435 22.3 26.5666C22.0333 26.5897 21.7777 26.523 21.5333 26.3666L16 23.0333Z"
                    fill="white"
                  />
                </svg>
                <span>
                  {
                    courses[
                      currentIndex === courses.length - 1 ? 0 : currentIndex + 1
                    ]?.courseName
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.indicators}>
          {courses.map((_, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? styles.indicatorActive
                  : styles.indicator
              }
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <CtaButton text="explore all courses" link="#"></CtaButton>
      </div>
    </section>
  );
};

export default CoursesSection;
