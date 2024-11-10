import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Left Content (Logo and Text) */}
        <div className={styles.leftContent}>
          <Image
            src="/assets/logo.png" // Ensure this path is correct
            alt="Logo"
            className={styles.logo}
            width={250} // Set the image width explicitly
            height={250} // Set the image height explicitly
          />
          <p className={styles.logoText}>Welcome to our site! Feel free to reach out.</p>
        </div>

        {/* Right Content (Contact Form) */}
        <div className={styles.rightContent}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" name="phone" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className={styles.inputField}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
