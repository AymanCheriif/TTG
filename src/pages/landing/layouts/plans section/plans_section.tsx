import React from "react";
import styles from "./plans_section.module.css";
import CtaButton from "../../../../components/ctabtn/ctabtn";

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.135 26.4859C16.6257 26.4859 18.1018 26.1923 19.479 25.6218C20.8562 25.0514 22.1076 24.2152 23.1617 23.1612C24.2157 22.1071 25.0519 20.8557 25.6223 19.4785C26.1928 18.1013 26.4864 16.6252 26.4864 15.1346C26.4864 13.6439 26.1928 12.1678 25.6223 10.7906C25.0519 9.41337 24.2157 8.16201 23.1617 7.10794C22.1076 6.05387 20.8562 5.21773 19.479 4.64727C18.1018 4.07681 16.6257 3.7832 15.135 3.7832C12.1245 3.7832 9.23722 4.97915 7.10843 7.10794C4.97963 9.23673 3.78369 12.124 3.78369 15.1346C3.78369 18.1451 4.97963 21.0324 7.10843 23.1612C9.23722 25.29 12.1245 26.4859 15.135 26.4859ZM14.8424 19.7255L21.1487 12.158L19.2114 10.5436L13.788 17.0504L10.9817 14.2428L9.19829 16.0263L12.9821 19.8101L13.9583 20.7863L14.8424 19.7255Z"
      fill="#00F942"
    />
  </svg>
);

interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  description: string[];
  features: string[];
  buttonText: string;
  link: string;
  isAdvanced?: boolean;
}

const PlanSection: React.FC = () => {
  const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic",
      duration: "1 Month",
      price: "499",
      period: "/ month",
      description: [
        "3andek access lel courses el kol chhar kemil",
        "Trading, UIUX Web Design, Web Development, Graphic design.",
      ],
      features: [
        "Weekly Voice Lessons.",
        "Access to The VIP Section on Discord (Lifetime)",
        "Suivi Kemla men TTG Professors.",
        "Access to the weekly meetings and Live sessions",
      ],
      buttonText: "JOIN BASIC PLAN",
      link: "#",
    },
    {
      id: "advanced",
      name: "Advanced",
      duration: "3 Months",
      price: "800",
      period: "/ month",
      description: [
        "3andek access lel courses el kol chhar kemil",
        "Trading, UIUX Web Design, Web Development, Graphic design.",
      ],
      features: [
        "Weekly Voice Lessons.",
        "Access to The VIP Section on Discord (Lifetime)",
        "Access to The VIP Section on Discord (Lifetime)",
        "Access to The VIP Section on Discord (Lifetime)",
        "Suivi Kemla men TTG Professors.",
        "Access to the weekly meetings and Live sessions",
        "Access to the weekly meetings and Live sessions",
        "Access to the weekly meetings and Live sessions",
      ],
      buttonText: "JOIN ADVANCED PLAN",
      link: "#",
      isAdvanced: true,
    },
    {
      id: "pro",
      name: "Pro",
      duration: "6 Months",
      price: "1200",
      period: "/ month",
      description: [
        "3andek access lel courses el kol chhar kemil",
        "Trading, UIUX Web Design, Web Development, Graphic design.",
      ],
      features: [
        "Weekly Voice Lessons.",
        "Access to The VIP Section on Discord (Lifetime)",
        "Suivi Kemla men TTG Professors.",
        "Access to the weekly meetings and Live sessions",
      ],
      buttonText: "JOIN PRO PLAN",
      link: "#",
    },
  ];

  return (
    <section className={styles.planSection}>
      <div className={styles.plansInner}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <div className={styles.tag}>
            <span>TTG Plans</span>
          </div>
          <h1 className={styles.title}>LOCK IN NOW</h1>
        </div>

        {/* Plans Grid */}
        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.planCard} ${
                plan.isAdvanced ? styles.advancedPlan : ""
              }`}
            >
              <div className={styles.planInner}>
                <div className={styles.info}>
                  <div className={styles.miniInfo}>
                    <div className={styles.pInfo}>
                      <div className={styles.prices}>
                        <div className={styles.duration}>{plan.duration}</div>
                        <div className={styles.pricing}>
                          <div className={styles.pricingPrice}>
                            <span className={styles.mainPrice}>
                              {plan.price}
                            </span>
                            <span className={styles.currency}>TND</span>
                          </div>
                          <span className={styles.period}>{plan.period}</span>
                        </div>
                      </div>
                      <div className={styles.planTag}>
                        <span>{plan.name}</span>
                      </div>
                    </div>
                    <div className={styles.description}>
                      {plan.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                      ))}
                    </div>
                  </div>
                  <div className={styles.features}>
                    {plan.features.map((feature, index) => (
                      <div key={index} className={styles.feature}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <CtaButton
                  text={plan.buttonText}
                  link={plan.link}
                  isSecondary={!plan.isAdvanced}
                />
              </div>
              <div className={styles.backgroundBlur}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
