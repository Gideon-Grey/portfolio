"use client";

import styles from "./About.module.scss";

const skills = [
  "C++",
  "Microcontrollers",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "React",
  "FastAPI",
  "GraphQL",
  "REST API",
  "HTML",
  "CSS",
  "SASS/SCSS",
  "Tailwind",
  "WebSocket",
  "React Query",
  "Figma",
  "Jest",
  "React Testing Library",
  "Vitest",
  "Webpack",
  "Vite",
  "CI/CD",
  "Redux",
  "GitHub / GitLab",
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          About <span className={styles.highlight}>me</span>
        </h2>

        <p className={styles.description}>
          Frontend Developer with 6 years of experience delivering high-impact solutions for 3M+ users. I specialize in the React ecosystem, design systems, and performance optimization — reducing bundle sizes, increasing page load speeds, and achieving 90+ Lighthouse scores. Led a Webpack to Vite migration that cut cold-start times by 70% for 40+ engineers, built a UI Kit with Storybook that reduced development time by 30%, and integrated Sentry to slash bug detection time from 3 days to under 24 hours. Mentored 4 junior developers to mid-level roles and led a domain-wide WCAG 2.1 AA accessibility audit. I thrive in collaborative environments, actively participate in hackathons and tech conferences, and am passionate about building scalable, user-centric applications.
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.2/5.0</span>
            <span className={styles.statLabel}>CGPA</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>6+ Years</span>
            <span className={styles.statLabel}>EXPERIENCE</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>3 Major</span>
            <span className={styles.statLabel}>PROJECTS</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>RESEARCH PAPERS</span>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>
            Technical <span className={styles.highlight}>Skills</span>
          </h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}