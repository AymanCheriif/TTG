import React, { useState } from "react";
import styles from "./contact.module.css";
import Popup from "../../components/popup/Popup";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  // Popup notification state
  const [popup, setPopup] = useState({
    isOpen: false,
    type: "success" as "success" | "error" | "info" | "warning",
    message: "",
  });

  // Validation functions
  const validateFirstName = (value: string): string => {
    if (!value.trim()) return "First name is required";
    if (value.trim().length < 2)
      return "First name must be at least 2 characters";
    return "";
  };

  const validateLastName = (value: string): string => {
    if (!value.trim()) return "Last name is required";
    if (value.trim().length < 2)
      return "Last name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value: string): string => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validateMessage = (value: string): string => {
    if (!value.trim()) return "Message is required";
    if (value.trim().length < 10)
      return "Message must be at least 10 characters";
    return "";
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if the field has been touched
    if (touched[name]) {
      let errorMessage = "";
      if (name === "firstName") errorMessage = validateFirstName(value);
      else if (name === "lastName") errorMessage = validateLastName(value);
      else if (name === "email") errorMessage = validateEmail(value);
      else if (name === "message") errorMessage = validateMessage(value);

      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    }
  };

  // Handle blur events (when user leaves a field)
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur
    let errorMessage = "";
    if (name === "firstName") errorMessage = validateFirstName(value);
    else if (name === "lastName") errorMessage = validateLastName(value);
    else if (name === "email") errorMessage = validateEmail(value);
    else if (name === "message") errorMessage = validateMessage(value);

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const firstNameError = validateFirstName(formData.firstName);
    const lastNameError = validateLastName(formData.lastName);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    // Update error states
    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      message: messageError,
    });

    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    // If there are no errors, submit the form
    if (!firstNameError && !lastNameError && !emailError && !messageError) {
      // In a real application, you would send the data to the server here
      console.log("Form submitted:", formData);

      // Show success popup
      setPopup({
        isOpen: true,
        type: "success",
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setTouched({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
      });
    } else {
      // Show error popup
      setPopup({
        isOpen: true,
        type: "error",
        message: "Please correct the errors in the form and try again.",
      });
    }
  };

  // Close popup handler
  const handleClosePopup = () => {
    setPopup((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <section className={styles.contact_container}>
        <span className={styles.contact_tagline}>Contact Us</span>
        <h1 className={styles.contact_title}>Let's have a chat</h1>
        <p className={styles.contact_description}>
          We would love to hear from you! Please fill out the form below and we
          will get back to you as soon as possible.
        </p>
        <form
          className={styles.contact_form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.flex_user_infos}>
            <div className={styles.form_group}>
              <label htmlFor="firstName" className={styles.form_label}>
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`${styles.form_input} ${
                  touched.firstName && errors.firstName
                    ? styles.input_error
                    : ""
                }`}
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
              />
              {touched.firstName && errors.firstName && (
                <div className={styles.error_message} id="firstName-error">
                  {errors.firstName}
                </div>
              )}
            </div>

            <div className={styles.form_group}>
              <label htmlFor="lastName" className={styles.form_label}>
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`${styles.form_input} ${
                  touched.lastName && errors.lastName ? styles.input_error : ""
                }`}
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.lastName}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
              />
              {touched.lastName && errors.lastName && (
                <div className={styles.error_message} id="lastName-error">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email" className={styles.form_label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles.form_input} ${
                touched.email && errors.email ? styles.input_error : ""
              }`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <div className={styles.error_message} id="email-error">
                {errors.email}
              </div>
            )}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="message" className={styles.form_label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className={`${styles.form_textarea} ${
                touched.message && errors.message ? styles.input_error : ""
              }`}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {touched.message && errors.message && (
              <div className={styles.error_message} id="message-error">
                {errors.message}
              </div>
            )}
          </div>
          <button type="submit" className={styles.form_button}>
            Send Message
          </button>
        </form>
      </section>

      {/* Popup notification */}
      <Popup
        type={popup.type}
        message={popup.message}
        isOpen={popup.isOpen}
        onClose={handleClosePopup}
        autoClose={true}
        autoCloseTime={5000}
      />
    </>
  );
};

export default Contact;
