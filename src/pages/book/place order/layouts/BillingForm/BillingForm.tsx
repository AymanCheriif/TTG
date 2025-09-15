import React from "react";
import styles from "./BillingForm.module.css";

interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface BillingFormProps {
  formData: OrderFormData;
  errors: Partial<OrderFormData>;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const BillingForm: React.FC<BillingFormProps> = ({
  formData,
  errors,
  onInputChange,
}) => {
  return (
    <div className={styles.form_section}>
      <h3 className={styles.section_title}>Billing Information</h3>

      <div className={styles.form_row}>
        <div className={styles.form_group}>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            className={errors.firstName ? styles.error : ""}
          />
          {errors.firstName && (
            <span className={styles.error_message}>{errors.firstName}</span>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            className={errors.lastName ? styles.error : ""}
          />
          {errors.lastName && (
            <span className={styles.error_message}>{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          className={errors.email ? styles.error : ""}
        />
        {errors.email && (
          <span className={styles.error_message}>{errors.email}</span>
        )}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onInputChange}
          className={errors.phone ? styles.error : ""}
        />
        {errors.phone && (
          <span className={styles.error_message}>{errors.phone}</span>
        )}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="address">Address *</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={onInputChange}
          className={errors.address ? styles.error : ""}
        />
        {errors.address && (
          <span className={styles.error_message}>{errors.address}</span>
        )}
      </div>

      <div className={styles.form_row}>
        <div className={styles.form_group}>
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={onInputChange}
            className={errors.city ? styles.error : ""}
          />
          {errors.city && (
            <span className={styles.error_message}>{errors.city}</span>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="postalCode">Postal Code *</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={onInputChange}
            className={errors.postalCode ? styles.error : ""}
          />
          {errors.postalCode && (
            <span className={styles.error_message}>{errors.postalCode}</span>
          )}
        </div>
      </div>

      {/* <div className={styles.form_group}>
        <label htmlFor="country">Country *</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={onInputChange}
          className={errors.country ? styles.error : ""}
        >
          <option value="">Select Country</option>
          <option value="TN">Tunisia</option>
          <option value="DZ">Algeria</option>
          <option value="MA">Morocco</option>
          <option value="EG">Egypt</option>
          <option value="SA">Saudi Arabia</option>
          <option value="AE">UAE</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="UK">United Kingdom</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
        {errors.country && (
          <span className={styles.error_message}>{errors.country}</span>
        )}
      </div> */}
    </div>
  );
};

export default BillingForm;
