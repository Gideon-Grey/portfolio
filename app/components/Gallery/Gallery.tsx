"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import styles from "./Gallery.module.scss";

const projects = [
  {
    id: 1,
    title: "CryptoGex",
    image: "/CryptoGex.png",
  },
  {
    id: 2,
    title: "Farfetch",
    image: "/Farfetch.png",
  },
  {
    id: 3,
    title: "Unlok",
    image: "/Unlok.png",
  },
  {
    id: 4,
    title: "Museum of the Future",
    image: "/Museum.png",
  },
  {
    id: 5,
    title: "Foxshop",
    image: "/Foxshop.png",
  },
  {
    id: 6,
    title: "DomPriceAI",
    image: "/DomPriceAI.png",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Work <span className={styles.highlight}>Showcase</span>
        </h2>
        <p className={styles.subtitle}>A showcase of my latest projects</p>

        <div
          ref={carouselRef}
          className={styles.carousel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.slideWrapper}>
            <div
              className={styles.slideContainer}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className={styles.slide}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.image}
                      priority={project.id === 1}
                    />
                  </div>
                  <div className={styles.slideOverlay}>
                    <h3 className={styles.slideTitle}>{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isHovered && (
            <>
              <button
                className={`${styles.navBtn} ${styles.navBtnPrev}`}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                className={`${styles.navBtn} ${styles.navBtnNext}`}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className={styles.dots}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}