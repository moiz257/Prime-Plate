import React from 'react';
import styles from '@/app/styles/ExpertiseSection.module.css';
import Image from 'next/image';

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      id: 1,
      image: "/assets/biryani.jpg", // replace with the actual path to your image
      title: "PAKISTANI",
      description: "Indulge in the rich and diverse tastes of Pakistan, with a menu that celebrates the country’s culinary heritage.",
    },
    {
      id: 2,
      image: "/assets/indian.jpeg",
      title: "INDIAN",
      description: "Experience the vibrant flavors of India with our specially crafted dishes that highlight the essence of Indian cuisine.",
    },
    {
      id: 3,
      image: "/assets/japanese.jpeg",
      title: "JAPNESE",
      description: "Explore the authentic tastes of Arabia with our selection of traditional and modern Arabian dishes.",
    },
  ];

  return (
    <section className={styles.expertiseSection}>
      <h2 className={styles.sectionHeading}>Our Expertise</h2>
      {expertiseItems.map((item, index) => (
        <div key={item.id} className={styles.expertiseItem}>
          <div className={styles.imageContainer}>
            <Image src={item.image} alt={item.title} className={styles.image} width={400} height={400} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.itemNumber}>{`${index + 1}.`}</span>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExpertiseSection;
