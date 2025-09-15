import React from "react";
import styles from "./overviewSection.module.css";

interface BookOverview {
  title: string;
  items: string[];
}

interface BookDetail {
  overview?: BookOverview[];
}

interface OverviewSectionProps {
  book: BookDetail;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ book }) => {
  return (
    <section className={styles.overview_section}>
      <div className={styles.section_container}>
        <h2 className={styles.section_title}>
          Master <span>Crypto</span> Trading
        </h2>
        <p className={styles.overview_description}>
          The Secrets of Crypto Trading and Analysis is the ultimate guide to
          unlocking consistent profits in the crypto market. Packed with
          strategies, insights, and step-by-step guidance, this book equips you
          with the tools needed to thrive in the digital economy.
        </p>
        {book.overview && (
          <div className={styles.overview_grid}>
            {book.overview.map((section, index) => (
              <div className={styles.overview_card} key={index}>
                <h3 className={styles.overview_title}>{section.title}</h3>
                <ul className={styles.overview_list}>
                  {section.items.map((item, i) => (
                    <li key={i} className={styles.overview_item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OverviewSection;
