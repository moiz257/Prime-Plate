"use client"
import React from 'react';
import styles from "@/app/styles/DishesSection.module.css"
import Image from 'next/image';

const dishes = [
  { title: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon and cheese', image: '/assets/dish1.jpeg' },
  { title: 'Chicken Tikka Masala', description: 'Pakistani curry with tender chicken in spicy sauce', image: '/assets/dish2.jpeg' },
  { title: 'Caprese Salad', description: 'Fresh tomatoes, mozzarella, and basil with balsamic glaze', image: '/assets/dish3.jpeg' },
  { title: 'Sushi Roll', description: 'Assorted seafood and vegetables wrapped in seaweed and rice', image: '/assets/dish4.jpeg' },
  { title: 'Chocolate Lava Cake', description: 'Decadent chocolate cake with a gooey center', image: '/assets/dish5.jpeg' },
  { title: 'Greek Salad', description: 'Crisp lettuce, olives, feta cheese, and tangy dressing', image: '/assets/dish6.jpeg' },
  { title: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts', image: '/assets/dish7.jpeg' },
  { title: 'Chicken Karahi', description: 'Spicy Chicken Karahi with Tandoori naan', image: '/assets/dish10.jpeg' },
  { title: 'Chicken Biryani', description: 'Tasty Chicken Biryani with Raita and Salad', image: '/assets/biryani.jpg' },
  { title: 'Tiramisu', description: 'Italian dessert with layers of coffee-soaked biscuits and mascarpone', image: '/assets/italian.jpeg' },
];

const DishesSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Dishes</h2>
      <div className={styles.grid}>
        {dishes.map((dish, index) => (
          <div key={index} className={styles.card}>
            <Image src={dish.image} alt={dish.title} className={styles.image} width={700} height={700} />
            <h3 className={styles.title}>{dish.title}</h3>
            <p className={styles.description}>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DishesSection;
