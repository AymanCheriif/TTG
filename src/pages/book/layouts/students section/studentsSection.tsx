import React, { useRef } from "react";
import styles from "./studentsSection.module.css";
import feedback from "../../../../assets/feedback.png";

interface BookTestimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

interface BookDetail {
  testimonials?: BookTestimonial[];
}

interface StudentsSectionProps {
  book: BookDetail;
}

const StudentsSection: React.FC<StudentsSectionProps> = ({ book }) => {
  const testimonialCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className={styles.students_section}>
      <div className={`${styles.section_container} container`}>
        <div className={styles.text_cont}>
          <h3 className={styles.title}>
            What Our <span>Readers</span> Say
          </h3>
          <p className={styles.description}>
            Hear from readers who have transformed their understanding through
            our books. These testimonials showcase the real impact of our
            content on learning and growth.
          </p>
        </div>
        <div className={styles.feedbacks_cont}>
          {book.testimonials?.map((testimonial, idx) => (
            <div
              ref={(el) => {
                testimonialCardRefs.current[idx] = el;
              }}
              className={`${styles.feedback_card} ${styles.studentsVideoFadeIn}`}
              key={idx}
            >
              <img
                src={testimonial.image || feedback}
                alt={`Testimonial from ${testimonial.name}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
