"use client";

import styles from "./Projects.module.scss";

const projects = [
  {
    id: 1,
    title: "CryptoGex",
    description: "Global crypto platform with $12B+ annualtrade volume",
    details: (
      <>
        ● Led the migration to Feature-Sliced Design (FSD) architecture for the user dashboard, improving maintainability and team onboarding speed by 2 times.
        <br />
        ● Built a real-time trading dashboard in React using WebSockets, handling 100+ price updates per minute with &lt;300 ms UI latency and no freezes, which increased average session duration by ~15%.
        <br />
        ● Introduced automated testing using Jest and React Testing Library, increasing test coverage from 0% to 80%, reducing critical production bugs by 33%, and significantly improving overall system stability.
      </>
    ),
    technologies: ["React", "REST API", "Webpack", "TypeScript", "FSD", "WebSockets", "JavaScript", "React Testing Library", "Zustand"],
  },
  {
    id: 2,
    title: "FARFETCH",
    description: "Global Luxury Fashion Marketplace,$4B+ Merchandise Value",
    details: (
      <>
        ● Enhanced application performance by improving Web Vitals metrics, achieving a 90+ Lighthouse score and reducing page load speed significantly.
        <br />
        ● Led a domain-wide Accessibility audit for WCAG 2.1 AA compliance ahead of the 2025 European Accessibility Act.
        <br />
        ● Led the migration from Webpack to Vite, reducing local cold-start times by 70% and optimizing the CI/CD pipeline for 40+ frontend engineers.
        <br />
        ● Decreased UI development time by 30% by developing a UI Kit library with StoryBook, speeding up component reuse.
        <br />
        ● Integrated Sentry for real-time error tracking across the platform, reducing the mean time to detect (MTTD) bugs from 3 days to under 24 hours.
      </>
),
    technologies: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "SASS/SCSS", "Redux", "GraphQL", "Jest", "Storybook", "Micro Frontends", "CI/CD" ],
  },
  {
    id: 3,
    title: "Unlok VPN Service",
    description: "Multi-Agent Document Intelligence",
    details: (
      <>
        ● Owned the frontend security &amp; architecture of a white-label support system with Telegram Mini App and web landing.
        <br />
        ● Implemented zero-trust webhook validation — Replaced HMAC-skip behavior with explicit 500 on missing secret. Added startup guard for production and comprehensive vitest coverage.
        <br />
        ● Merged two diverged projects — Landing (web) and Telegram Mini App shared 99.9% of code but had drifted.
        <br />
        ● Unified into a single repo with runtime platform detection, conditional CSP (frame-ancestors only for Telegram host), and route-based feature flags. Reduced maintenance cost by ~40%.
      </>
),
    technologies: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Zustand", "REST API", "Vitest", "WebSocket", "Docker", "CI/CD" ],
  },
  {
    id: 4,
    title: "Foxshop Marketplace",
    description: "Marketplace with FSD architecture",
    details:
      "Modern frontend e-commerce application built with Next.js 16, React 19 and Redux Toolkit. The project simulates a real online marketplace with categories, product catalog, cart system and promo sections.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "HTML", "SCSS", "Redux", "FSD"],
  },
  {
    id: 5,
    title: "DomPriceAI",
    description: "AI-Powered market value estimation of apartments in Kazakhstan",
    details:
      "The goal of this project is to build a machine learning model for residential property valuation and investigate the factors that influence housing prices.",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "ML", "HTML", "SCSS"],
  },
  {
    id: 6,
    title: "Museum of the Future",
    description: "High-performance web application for the Museum of the Future",
    details:
      "Built a high-performance web application for the Museum of the Future using Next.js 14, React, and TypeScript. Responsive SCSS Modules, SSR optimization, and Framer Motion animations for an immersive futuristic experience.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "HTML", "SCSS", "Redux", "FEOD", "RTK", "REST API"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          Featured <span className={styles.highlight}>Projects</span>
        </h2>
        <p className={styles.subtitle}>
          AI-powered applications, full-stack products &amp; intelligent systems
        </p>

        <div className={styles.projectsList}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>

              <p className={styles.projectDetails}>{project.details}</p>

              <div className={styles.projectTech}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}