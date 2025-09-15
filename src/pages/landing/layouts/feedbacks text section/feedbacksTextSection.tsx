import React, { useState } from "react";
import Styles from "./feedbacksTextSection.module.css";
import CtaButton from "../../../../components/ctabtn/ctabtn";

// Import feedback images
import feedback1 from "../../../../assets/feedback.png";
import feedback2 from "../../../../assets/feedback2.png";
import feedback3 from "../../../../assets/feedback3.png";
import feedback4 from "../../../../assets/feedback4.png";
import feedback5 from "../../../../assets/feedback3.png";
import feedback6 from "../../../../assets/feedback6.png";
import feedback7 from "../../../../assets/feedback7.png";
import feedback8 from "../../../../assets/feedback8.png";
import feedback9 from "../../../../assets/feedback9.png";
import feedback10 from "../../../../assets/feedback10.png";

const FeedbacksTextSection: React.FC = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const feedbackColumn1 = [
    feedback1,
    feedback2,
    feedback3,
    feedback4,
    feedback3,
  ];
  const feedbackColumn2 = [
    feedback5,
    feedback6,
    feedback7,
    feedback3,
    feedback6,
  ];
  const feedbackColumn3 = [
    feedback8,
    feedback9,
    feedback10,
    feedback3,
    feedback6,
  ];

  const openModal = (feedbackSrc: string) => {
    setSelectedFeedback(feedbackSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedback(null);
  };

  return (
    <section className={Styles.feedbacksTextSection}>
      <div className={Styles.contentContainer}>
        <div className={Styles.topContent}>
          <span className={Styles.feedbackTag}>TTG Students</span>
          <h1>
            our students <span>feedbacks</span>
          </h1>
        </div>
        <div className={Styles.bottomContent}>
          <div className={Styles.feedbacks}>
            <div className={Styles.feedbackColumn}>
              {feedbackColumn1.map((feedback, index) => (
                <div
                  key={`col1-${index}`}
                  className={Styles.feedback}
                  onClick={() => openModal(feedback)}
                >
                  <img src={feedback} alt={`student feedback ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className={Styles.feedbackColumn}>
              {feedbackColumn2.map((feedback, index) => (
                <div
                  key={`col2-${index}`}
                  className={Styles.feedback}
                  onClick={() => openModal(feedback)}
                >
                  <img src={feedback} alt={`student feedback ${index + 5}`} />
                </div>
              ))}
            </div>
            <div className={Styles.feedbackColumn}>
              {feedbackColumn3.map((feedback, index) => (
                <div
                  key={`col3-${index}`}
                  className={Styles.feedback}
                  onClick={() => openModal(feedback)}
                >
                  <img src={feedback} alt={`student feedback ${index + 8}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <CtaButton
          text="join tunisina top g's"
          link="app.tunisian.top.g's"
        ></CtaButton>
      </div>

      {isModalOpen && (
        <div className={Styles.modalOverlay} onClick={closeModal}>
          <div
            className={Styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={Styles.closeButton} onClick={closeModal}>
              ×
            </button>
            {selectedFeedback && (
              <img
                src={selectedFeedback}
                alt="Feedback"
                className={Styles.modalImage}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedbacksTextSection;
