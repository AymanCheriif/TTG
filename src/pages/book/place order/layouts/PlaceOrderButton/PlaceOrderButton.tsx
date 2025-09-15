import React from "react";
import styles from "./PlaceOrderButton.module.css";

interface PlaceOrderButtonProps {
  total: number;
  isProcessing: boolean;
  onSubmit?: () => void;
}

const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = ({
  total,
  isProcessing,
  onSubmit,
}) => {
  return (
    <button
      type="submit"
      className={styles.place_order_btn}
      disabled={isProcessing}
      onClick={onSubmit}
    >
      {isProcessing ? (
        <>
          <div className={styles.spinner}></div>
          Processing Order...
        </>
      ) : (
        <>
          Place Order - ${total.toFixed(2)}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      )}
    </button>
  );
};

export default PlaceOrderButton;
