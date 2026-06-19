"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>
            Gideon-Grey
          </span>
        </Link>

        <ul className={styles.links}>
          <li>
            <Link href="#about" className={styles.link} onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#projects" className={styles.link} onClick={closeMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="#gallery" className={styles.link} onClick={closeMenu}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.link} onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </ul>

        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className={styles.burgerIcon}
          />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          <li>
            <Link href="#about" className={styles.mobileLink} onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#projects" className={styles.mobileLink} onClick={closeMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="#gallery" className={styles.mobileLink} onClick={closeMenu}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.mobileLink} onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}