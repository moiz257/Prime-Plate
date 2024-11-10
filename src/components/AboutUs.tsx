"use client";
import styles from "@/app/styles/About.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.videoBackground}
        src="/assets/restaurant.mp4" // Update with the actual path to your video
        autoPlay
        loop
        muted
      />
      <div className={styles.textOverlay}>
        <h1>Celebrating 5 years</h1>
        <p>
          Welcome to Prime Plate Restaurant, Established in 2019. We start up with zeal, we still take it with enthusiasm. Our devotion makes our visions more broader and our hard work and consistency never let us down in any pandemic. That&apos;s the only reason behind us celebrating 5 years and providing our highly demanding services from the past 5 years
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
