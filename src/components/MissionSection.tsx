import React from 'react';
import styles from '@/app/styles/MissionSection.module.css';

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.textOverlay}>
        <h1 className={styles.heading}>Our Mission</h1>
        <p className={styles.paragraph}>
        At our restaurant, our mission is to create delicious and memorable dining experiences.
        </p>
      </div>
      <video
        className={styles.video}
        src="/assets/mission.mp4" // Replace with your actual video file path
        autoPlay
        loop
        muted
      />
    </section>
  );
};

export default MissionSection;
