import React from "react";
import styles from "./discord_section.module.css";
import CtaButton from "../../../../components/ctabtn/ctabtn";
import discordImage from "../../../../assets/discord.png"; // Adjust the path as necessary
const DiscordSection: React.FC = () => {
  return (
    <section className={styles.discordSection}>
      <div className={styles.discordContent}>
        <div className={styles.imageContainer}>
          <img src={discordImage} alt="discord image" />
        </div>
        <div className={styles.textContent}>
          <span className={styles.tag}>12000+ Members</span>
          <h1>
            <span>Biggest</span> E-learning Community in Tunisia
          </h1>
          <p>
            In a fast-moving world, staying ahead means mastering skills that
            create real value. Join Tunisian Top G’s Academy and unlock your
            path to success through expert-led courses and hands-on learning.
          </p>
          <CtaButton
            text="Join Discord"
            link="https://discord.gg/your-invite-link"
          ></CtaButton>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
