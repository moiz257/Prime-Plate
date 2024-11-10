"use client"
import React from 'react';
import styles from '@/app/styles/QuoteSection.module.css';
import Image from 'next/image';

const QuoteSection = () => {
  return (
    <section className={styles.quoteSection}>
      <blockquote className={styles.quoteText}>
        “As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Prime Plate, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”
      </blockquote>
      <div className={styles.authorContainer}>
        <Image
          src="/assets/ali.jpg" // replace with the actual path to your image
          alt="Ali Akbar"
          className={styles.authorImage}
          height={400}
          width={400}
        />
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>Ali Akbar</span>
          <span className={styles.authorTitle}>Food Critic</span>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
