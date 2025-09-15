import React from "react";
import styles from "./ctabtn.module.css";
interface ctaProps {
  text: string;
  link: string;
  isSecondary?: boolean;
  isIcon?: boolean;
}

const CtaButton: React.FC<ctaProps> = ({
  text,
  link,
  isSecondary = false,
  isIcon = true,
}) => {
  return (
    <a
      href={link}
      className={`${styles.button} ${isSecondary ? styles.secondary : ""}`}
    >
      {text}

      {isIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.2933 5.29343C17.4808 5.10616 17.735 5.00098 18 5.00098C18.265 5.00098 18.5192 5.10616 18.7067 5.29343L28.7067 15.2934C28.8939 15.4809 28.9991 15.7351 28.9991 16.0001C28.9991 16.2651 28.8939 16.5193 28.7067 16.7068L18.7067 26.7068C18.6151 26.805 18.5047 26.8838 18.382 26.9385C18.2594 26.9931 18.127 27.0225 17.9927 27.0249C17.8584 27.0273 17.7251 27.0026 17.6005 26.9523C17.476 26.902 17.3629 26.8271 17.2679 26.7321C17.173 26.6372 17.0981 26.5241 17.0478 26.3996C16.9975 26.275 16.9728 26.1417 16.9752 26.0074C16.9776 25.8731 17.007 25.7407 17.0616 25.618C17.1163 25.4954 17.1951 25.385 17.2933 25.2934L25.5867 17.0001H4C3.73478 17.0001 3.48043 16.8947 3.29289 16.7072C3.10536 16.5197 3 16.2653 3 16.0001C3 15.7349 3.10536 15.4805 3.29289 15.293C3.48043 15.1055 3.73478 15.0001 4 15.0001H25.5867L17.2933 6.70676C17.1061 6.51926 17.0009 6.2651 17.0009 6.0001C17.0009 5.7351 17.1061 5.48093 17.2933 5.29343Z"
            fill="white"
          />
        </svg>
      )}
    </a>
  );
};

export default CtaButton;
