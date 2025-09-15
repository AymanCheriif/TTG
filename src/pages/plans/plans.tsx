import React from "react";
import styles from "./plans.module.css";
import CtaButton from "../../components/ctabtn/ctabtn";
const PlansPage: React.FC = () => {
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

  const allFeatures = [
    "Weekly Voice Lessons",
    "Access to The VIP Section on Discord (Lifetime)",
    "Suivi Kemla men TTG Professors",
    "Access to the weekly meetings and Live sessions",
    "Private Sessions",
    "Free Trading Book",
    "Discord Priority Support",
    "1-on-1 Mentoring",
  ];

  const hasFeature = (planIndex: number, feature: string) => {
    return plans[planIndex].features.includes(feature);
  };

  return (
    <>
      <section className={styles.planSection}>
        <div className={styles.plansInner}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <div className={styles.tag}>
              <span>TTG Plans</span>
            </div>
            <h1 className={styles.title}>Take action now</h1>
            <p className={styles.description}>
              A9wa Academy fi Tounes, mta3 top G tounsi! T3allem skills jdidin,
              w walli version a9wa men rouhek
            </p>
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

      {/* Comparison Table */}
      <section
        className={styles.comparison_section}
        style={{ marginTop: "0", paddingTop: "0" }}
      >
        <div className={styles.section_container} style={{ paddingTop: "0" }}>
          <h2 className={styles.comparison_title}>Plan Comparison</h2>
          <div
            className={styles.table_container}
            aria-label="Plan comparison table"
          >
            <table className={styles.comparison_table}>
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  {plans.map((plan, idx) => (
                    <th key={idx} scope="col">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, idx) => (
                  <tr key={idx}>
                    <td>{feature}</td>
                    {plans.map((_, planIdx) => (
                      <td key={planIdx} className={styles.check_cell}>
                        {hasFeature(planIdx, feature) ? (
                          <span
                            className={styles.check_mark}
                            aria-label="Feature included"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 31 31"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.5675 26.8106C17.0582 26.8106 18.5343 26.517 19.9115 25.9465C21.2887 25.3761 22.5401 24.5399 23.5942 23.4859C24.6482 22.4318 25.4844 21.1804 26.0548 19.8032C26.6253 18.426 26.9189 16.9499 26.9189 15.4593C26.9189 13.9686 26.6253 12.4925 26.0548 11.1153C25.4844 9.73808 24.6482 8.48671 23.5942 7.43264C22.5401 6.37857 21.2887 5.54244 19.9115 4.97198C18.5343 4.40152 17.0582 4.10791 15.5675 4.10791C12.557 4.10791 9.66971 5.30385 7.54092 7.43264C5.41213 9.56144 4.21619 12.4487 4.21619 15.4593C4.21619 18.4698 5.41213 21.3571 7.54092 23.4859C9.66971 25.6147 12.557 26.8106 15.5675 26.8106ZM15.2749 20.0503L21.5812 12.4827L19.6439 10.8683L14.2205 17.3751L11.4142 14.5676L9.63078 16.351L13.4146 20.1348L14.3908 21.111L15.2749 20.0503Z"
                                fill="#00F942"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span
                            className={styles.dash_mark}
                            aria-label="Feature not included"
                          >
                            -
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansPage;
