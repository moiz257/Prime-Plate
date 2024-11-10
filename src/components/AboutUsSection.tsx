"use client"
import React from 'react';
import styles from '@/app/styles/AboutUsSection.module.css';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>About Us</h1>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/assets/about.jpeg" alt="Chef cooking" className={styles.image} width={700} height={700} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>We love cooking!</h2>
          <div className={styles.underline}></div>
          <p className={styles.paragraph}>
            At Prime Plate, we believe that great food goes beyond taste it tells a story of dedication and creativity. From our chef&apos;s
            signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional.
            Whether you&apos;re savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a
            celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience
            Prime Plate—where every meal is a masterpiece.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
