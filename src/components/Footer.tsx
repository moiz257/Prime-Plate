"use client"
import React from 'react';
import styles from '@/app/styles/Footer.module.css'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.contactDetails}>
        <p className={styles.contactItem}>Address: 123 Main Street, Karachi, Pakistan, 345678</p>
        <p className={styles.contactItem}>Phone: 123-456-7890</p>
        <p className={styles.contactItem}>Email: contact@PrimePlate.com</p>
      </div>
      <div className={styles.logoContainer}>
        <Image src='/assets/logo.png' alt="Prime Plate Logo" className={styles.logo} width={700} height={700} />
      </div>
      <div className={styles.socialIcons}>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
      <p className={styles.footerText}>©Prime Plate. All rights reserved.</p>
    </section>
  );
};

export default ContactSection;
