"use client";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          Let&apos;s <span className={styles.highlight}>Connect</span>
        </h2>
        <p className={styles.subtitle}>
          Open to opportunities in Software Development
        </p>

        <div className={styles.contactCard}>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>EMAIL</span>
            <span className={styles.contactValue}>gideon.grey1992@gmail.com</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>LOCATION</span>
            <span className={styles.contactValue}>Astana/Kazakhstan</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>LINKEDIN</span>
            <a 
              href="https://www.linkedin.com/in/dmitry-kochiev-7a5286401/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              linkedin.com/in/dmitry-kochiev
            </a>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>GITHUB</span>
            <a 
              href="https://github.com/Gideon-Grey" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              github.com/Gideon-Grey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
