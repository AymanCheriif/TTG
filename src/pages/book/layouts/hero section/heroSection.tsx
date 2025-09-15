import React from "react";
import styles from "./heroSection.module.css";
import CtaButton from "../../../../components/ctabtn/ctabtn";

interface BookDetail {
  id: number;
  title: string;
  author: string;
  authorId: number;
  authorBio: string;
  authorImage: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  publishYear: string;
  pages: number;
  language: string;
  category: string;
  highlights: {
    title: string;
    description: string;
  }[];
  previewUrl?: string;
  price?: number;
  rating?: number;
  reviews?: number;
  subtitle?: string;
  keyPoints?: string[];
  limitedSupply?: boolean;
}

interface HeroSectionProps {
  book: BookDetail;
}

const HeroSection: React.FC<HeroSectionProps> = ({ book }) => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.section_container}>
        <div className={styles.book_details_grid}>
          <div className={styles.book_cover_container}>
            <div className={styles.book_cover_highlight}>
              <img
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                className={styles.book_cover}
              />
            </div>
          </div>
          <div className={styles.book_info_container}>
            <div className={styles.book_header}>
              <span className={styles.category_badge}>{book.category}</span>
              <h1 className={styles.book_title}>
                The <span>Crypto</span> Trader's <span>Handbook</span>
              </h1>
              <div className={styles.author_info}>
                <img
                  src={book.authorImage}
                  alt={book.author}
                  className={styles.author_image}
                />
                <div className={styles.author_details}>
                  <span className={styles.by_text}>By</span>
                  <span className={styles.author_name}>{book.author}</span>
                </div>
              </div>
            </div>

            <div className={styles.book_description}>
              <p>{book.fullDescription}</p>
            </div>

            <div className={styles.price_container}>
              <span className={styles.price_label}>Price:</span>
              <span className={styles.book_price}>${book.price}</span>
            </div>

            <CtaButton link={"order"} text={"Get Your Copy Now"}></CtaButton>
            {/* Add limited supply badge if applicable */}
            {book.limitedSupply && (
              <div className={styles.limited_supply_badge}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#DA21FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Limited Supply - Order Now!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
