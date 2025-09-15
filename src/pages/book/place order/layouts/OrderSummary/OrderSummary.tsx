import React from "react";
import styles from "./OrderSummary.module.css";

interface BookDetail {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  pages: number;
  language: string;
  category: string;
  publishYear: string;
  price?: number;
  limitedSupply?: boolean;
}

interface OrderSummaryProps {
  book: BookDetail;
  shippingCost: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  book,
  shippingCost,
  tax,
  total,
}) => {
  return (
    <div className={styles.order_summary}>
      <h2 className={styles.summary_title}>Order Summary</h2>

      <div className={styles.book_summary}>
        <div className={styles.book_image_container}>
          <img
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            className={styles.book_image}
          />
        </div>

        <div className={styles.book_info}>
          <h3 className={styles.book_title}>{book.title}</h3>
          <p className={styles.book_author}>By {book.author}</p>
          <p className={styles.book_category}>{book.category}</p>
          <div className={styles.book_details}>
            <span>{book.pages} pages</span>
            <span>•</span>
            <span>{book.language}</span>
            <span>•</span>
            <span>{book.publishYear}</span>
          </div>
        </div>
      </div>

      <div className={styles.price_breakdown}>
        <div className={styles.price_row}>
          <span>Book Price</span>
          <span>${book.price?.toFixed(2)}</span>
        </div>
        <div className={styles.price_row}>
          <span>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className={styles.price_row}>
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className={styles.price_row_total}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {book.limitedSupply && (
        <div className={styles.limited_supply_notice}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#DA21FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Limited Supply - Only a few copies left!</span>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
