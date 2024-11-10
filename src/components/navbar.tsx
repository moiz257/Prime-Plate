"use client";
import { useState } from "react";
import Image from "next/image"; // Next.js Image component
import Link from "next/link"; // Import Link component
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "@/app/styles/Navbar.module.css"; // Custom CSS

// Define types for the links
interface LinkItem {
  text: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Define the links with paths to other pages
  const links: LinkItem[] = [

    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Dishes", href: "/dishes" },
    { text: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Image src="/assets/logo.png" alt="logo" width={120} height={25} />
        <div className={styles.linksContainer}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href} // Use the `href` directly for navigation
              className={styles.navLink}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className={styles.mobileMenuButton}>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href} // Use the `href` directly for navigation
              className={styles.mobileMenuLink}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
