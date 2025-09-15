import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import { Questions } from "../../../../data/data";

const FAQSection: React.FC = () => {
  // Add state for expanded question
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section className={styles.common_questions}>
      <div className={styles.section_container}>
        <span>Have questions?</span>
        <h1 className={styles.title}>Common Questions</h1>
        <div className={styles.common_questions_cont}>
          {Questions.map((question, idx) => (
            <div className={styles.question_card} key={idx}>
              <h2
                className={styles.question_title}
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                style={{ cursor: "pointer" }}
              >
                <span>{question.qst}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none"
                  style={{
                    transform:
                      expandedIdx === idx ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  <path
                    d="M25.4999 18.9134H18.4166V25.9967C18.4166 26.3725 18.2673 26.7328 18.0017 26.9985C17.736 27.2642 17.3756 27.4134 16.9999 27.4134C16.6242 27.4134 16.2639 27.2642 15.9982 26.9985C15.7325 26.7328 15.5833 26.3725 15.5833 25.9967V18.9134H8.49992C8.1242 18.9134 7.76386 18.7642 7.49818 18.4985C7.23251 18.2328 7.08325 17.8725 7.08325 17.4967C7.08325 17.121 7.23251 16.7607 7.49818 16.495C7.76386 16.2293 8.1242 16.0801 8.49992 16.0801H15.5833V8.99674C15.5833 8.62102 15.7325 8.26069 15.9982 7.99501C16.2639 7.72933 16.6242 7.58008 16.9999 7.58008C17.3756 7.58008 17.736 7.72933 18.0017 7.99501C18.2673 8.26069 18.4166 8.62102 18.4166 8.99674V16.0801H25.4999C25.8756 16.0801 26.236 16.2293 26.5017 16.495C26.7673 16.7607 26.9166 17.121 26.9166 17.4967C26.9166 17.8725 26.7673 18.2328 26.5017 18.4985C26.236 18.7642 25.8756 18.9134 25.4999 18.9134Z"
                    fill="white"
                  />
                </svg>
              </h2>
              <div
                className={styles.question_answer}
                style={{
                  maxHeight: expandedIdx === idx ? 300 : 0,
                  opacity: expandedIdx === idx ? 1 : 0,
                  overflow: "hidden",
                  transition:
                    "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
                  marginTop: expandedIdx === idx ? 16 : 0,
                }}
              >
                {question.answear}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
