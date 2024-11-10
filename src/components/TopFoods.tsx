import React from 'react';
import styles from '@/app/styles/TopFoods.module.css';

const TopFoods = () => {
  const TopFoodsItems = [
    {
      id: 1,
      video: "/assets/biryani.mp4", // Replace with the actual path to your video
      title: "Chicken Biryani",
      description: "Indulge in the aromatic and flavorful Chicken Biryani, a perfect blend of spices and tender chicken served only at Prime Plate.",
    },
    {
      id: 2,
      video: "/assets/masala.mp4", // Replace with the actual path to your video
      title: "Masala Dosa",
      description: "Savor the crispy and delicious Masala Dosa, a South Indian delicacy filled with spiced potato masala, made fresh at Prime Plate.",
    },
    {
      id: 3,
      video: "/assets/sushi.mp4", // Replace with the actual path to your video
      title: "Sushi",
      description: "Experience the authentic taste of Japanese Sushi with our expertly crafted rolls, using the freshest ingredients and perfect seasoning.",
    },
  ];

  return (
    <section className={styles.TopFoods}>
      <h2 className={styles.sectionHeading}>Our Top Dishes</h2>
      {TopFoodsItems.map((item, index) => (
        <div key={item.id} className={styles.expertiseItem}>
          <div className={styles.videoContainer}>
            <video src={item.video} autoPlay loop muted className={styles.video} />
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

export default TopFoods;
