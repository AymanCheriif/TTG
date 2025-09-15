import React from "react";
import styles from "./highlightsSection.module.css";

interface BookDetail {
  highlights: {
    title: string;
    description: string;
  }[];
}

interface HighlightsSectionProps {
  book: BookDetail;
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ book }) => {
  return (
    <section className={styles.highlights_section}>
      <div className={styles.section_container}>
        <h2 className={styles.section_title}>
          What You'll <span>Learn</span>
        </h2>
        <div className={styles.highlights_grid}>
          {book.highlights.map((highlight, index) => (
            <div className={styles.highlight_card} key={index}>
              <div className={styles.highlight_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DA21FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className={styles.highlight_content}>
                <h3 className={styles.highlight_title}>{highlight.title}</h3>
                <p className={styles.highlight_description}>
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
