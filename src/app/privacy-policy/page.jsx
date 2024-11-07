import React from "react";
import styles from "@/app/privacy-policy/page.module.css";
export async function generateMetadata() {
  return {
    title: "Privacy and Policy",
    description:
    "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed.",
    openGraph: {
      images: [
        {
          url: "https://fama.b-cdn.net/GameTech/gtlogo.png",
          height: 1200,
          width: 600,
          alt: "Alt",
        },
      ],
    },
  };
}
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles["header-texts"]}>Privacy and Policy </h1>
        <span>
          At GameTechAnime, we value your privacy and want to be clear about how we handle your
          information. This policy explains what information we collect and why we collect it
        </span>
        <div className={styles.rules}>
          <h2 className={styles["header-texts"]}>Information Collection and Use</h2>
          <span className={styles.lists}>
            When you visit GameTechAnime, we automatically collect basic information through our web
             servers and Google Analytics. This includes your IP address, browser type, operating system,
              and which pages you visit. We use this information to understand how visitors use our site and 
              to improve our content and user experience.
          </span>
          <h2 className={styles["header-texts"]}>Cookies</h2>
          <span className={styles.lists}>
          Our site uses cookies to work properly and to help us understand site usage through Google 
          Analytics. You can control cookies through your browser settings, though this might affect
           how our site works for you.
          </span>
        </div>
        <div className={styles.rules}>
          <h2 className={styles["header-texts"]}>Google Analytics </h2>
          <span className={styles.lists}>
          We use Google Analytics to understand our website traffic. Google Analytics has its own privacy
           policy and collects data according to its terms. You can opt out of Google Analytics tracking by 
           installing their opt-out browser add-on
          </span>
        </div>
        <div className={styles.rules}>
          <h2 className={styles["header-texts"]}>Data Security</h2>
          <span className={styles.lists}>
          We take reasonable steps to protect your information through secure servers and regular
           security monitoring. Since we're a global website, your data may be processed on servers in
            different countries.
          </span>
        </div>

        <div className={styles.rules}>
          <h2 className={styles["header-texts"]}>Your Privacy Rights</h2>
          <span className={styles.lists}>
          You can request information about what data we have or ask us to delete your technical data
         where possible. We don't collect personal information unless you specifically provide it to us.
          </span>
        </div>
        <div className={styles.rules}>
          
          <h2 className={styles["header-texts"]}>Changes and Contact</h2>
          <span className={styles.lists}>
          We may update this policy occasionally. For any privacy questions, email us at 
          gametechanime@gmail.com with the subject line [PRIVACY INQUIRY].
          </span>
        </div>
         
      </div>
    </>
  );
};

export default page;
