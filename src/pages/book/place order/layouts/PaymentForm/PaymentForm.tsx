import React from "react";
import styles from "./PaymentForm.module.css";

interface PaymentFormData {
  paymentMethod: "card" | "paypal" | "crypto";
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardName?: string;
}

interface PaymentFormProps {
  formData: PaymentFormData;
  errors: Partial<PaymentFormData>;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  formData,
  errors,
  onInputChange,
}) => {
  return (
    <div className={styles.form_section}>
      <h3 className={styles.section_title}>Payment Method</h3>

      <div className={styles.payment_methods}>
        <label className={styles.payment_option}>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === "card"}
            onChange={onInputChange}
          />
          <span className={styles.payment_label}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
            </svg>
            Credit/Debit Card
          </span>
        </label>

        <label className={styles.payment_option}>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={formData.paymentMethod === "paypal"}
            onChange={onInputChange}
          />
          <span className={styles.payment_label}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
            </svg>
            PayPal
          </span>
        </label>

        <label className={styles.payment_option}>
          <input
            type="radio"
            name="paymentMethod"
            value="crypto"
            checked={formData.paymentMethod === "crypto"}
            onChange={onInputChange}
          />
          <span className={styles.payment_label}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
            </svg>
            Cryptocurrency
          </span>
        </label>
      </div>

      {formData.paymentMethod === "card" && (
        <div className={styles.card_details}>
          <div className={styles.form_group}>
            <label htmlFor="cardNumber">Card Number *</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={onInputChange}
              className={errors.cardNumber ? styles.error : ""}
            />
            {errors.cardNumber && (
              <span className={styles.error_message}>{errors.cardNumber}</span>
            )}
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_group}>
              <label htmlFor="expiryDate">Expiry Date *</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={onInputChange}
                className={errors.expiryDate ? styles.error : ""}
              />
              {errors.expiryDate && (
                <span className={styles.error_message}>
                  {errors.expiryDate}
                </span>
              )}
            </div>

            <div className={styles.form_group}>
              <label htmlFor="cvv">CVV *</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={onInputChange}
                className={errors.cvv ? styles.error : ""}
              />
              {errors.cvv && (
                <span className={styles.error_message}>{errors.cvv}</span>
              )}
            </div>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="cardName">Cardholder Name *</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={onInputChange}
              className={errors.cardName ? styles.error : ""}
            />
            {errors.cardName && (
              <span className={styles.error_message}>{errors.cardName}</span>
            )}
          </div>
        </div>
      )}

      {formData.paymentMethod === "paypal" && (
        <div className={styles.payment_notice}>
          <p>
            You will be redirected to PayPal to complete your payment securely.
          </p>
        </div>
      )}

      {formData.paymentMethod === "crypto" && (
        <div className={styles.payment_notice}>
          <p>
            You will receive cryptocurrency payment instructions after placing
            your order.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
