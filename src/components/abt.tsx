import React from 'react';
import styles from '@/app/styles/Aboutp.module.css';

const Abt: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionHeading}>About Us</h2>
      <p className={styles.aboutText}>
        Welcome to Prime Plate, where we bring together a variety of culinary flavors from around the world.
        Our restaurant specializes in Indian, Pakistani, and Japanese dishes, crafted with the finest ingredients
        to deliver a memorable dining experience. Our chefs are passionate about authenticity and quality,
        ensuring that every meal is a journey through the rich traditions of these diverse cuisines. 
        Come join us for a taste adventure that celebrates culture and flavor!
      </p>
    </section>
  );
};

export default Abt;
