import React from "react";
import styles from "@/app/privacy-policy/page.module.css";
export async function generateMetadata() {
  return {
    title: "About Us",
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
        <h1 className={styles["header-texts"]}>
          About Us
        </h1>
        <ul>
          <li className={styles.story}>
            Welcome to GameTechAnime!
          </li>
        </ul>

        <h2>Our Story</h2>
        <ul>
          <li className={styles.story}>
            GameTechAnime started as a passion project in 2024 by a small group of friends who spent
            countless hours discussing gaming strategies, debating the latest tech releases, and getting
            excited about new anime seasons. We noticed that while there were plenty of websites focused
            on each of these topics individually, finding reliable content that brought all these interests
            together was surprisingly difficult.

            What began as casual Discord conversations and shared Google Docs full of gaming guides
            eventually evolved into GameTechAnime. We're not trying to reinvent the wheel here – we're
            just a bunch of enthusiasts who love creating content about the things we genuinely care about.
          </li>
        </ul>

       <h2  className={styles["header-texts"]} > What We Cover</h2>
     
        <ul style={{ marginTop: "15px" }}>
          <li className={styles.lists}>
          Latest gaming news and in-depth guides
          </li>
          <li className={styles.lists}>
          Tech reviews and industry updates
          </li>
          <li className={styles.lists}>
          Anime discussions and recommendations
          </li>
          <li className={styles.lists}>
          	Esports coverage and tournament analysis
          </li>
      
        </ul>

        <h2 className={styles["header-texts"]} >Our Approach</h2>
        <ul style={{ marginTop: "15px" }}>
          <li className={styles.list}>
            We keep things straightforward: accurate information, clear guides, and honest opinions.
            No clickbait, no unnecessary hype – just content we'd want to read ourselves.
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
