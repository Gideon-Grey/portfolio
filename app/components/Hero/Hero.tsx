"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.leftColumn}>
          <div className={styles.topRow}>
            <span className={styles.brand}>THE PORTFOLIO</span>
          </div>

          <div className={styles.content}>
            <div className={styles.nameWrapper}>
              <h1 className={styles.firstName}>GIDEON</h1>
              <h1 className={styles.lastName}>GREY</h1>
            </div>
            
            <div className={styles.bottomRow}>
              <p className={styles.title}>SENIOR FRONTEND DEVELOPER</p>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/hero-image.png"
              alt="Gideon Grey - Developer"
              fill
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}