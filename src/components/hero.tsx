"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/styles/Hero.module.css'; // Import CSS module

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video
          src="/assets/hero.mp4" // Path updated to public folder
          className={styles.video}
          muted
          autoPlay
          loop
          playsInline
          poster="/assets/hero.jpeg"
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          src="/assets/logo.png" // Path updated to public folder
          alt="Prime Plate Restaurant"
          className={styles.logo}
        />
        <p className={styles.location}>Karachi</p>
      </div>
    </section>
  );
};

export default Hero;
