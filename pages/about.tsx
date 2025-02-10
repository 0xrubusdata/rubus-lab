import React from "react";
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔍 About Rubus Lab</h1>
      <p className={styles.subtitle}>
        Rubus Lab is an innovation hub dedicated to building AI-powered automation tools and intelligent agents.
        Our mission is to explore the frontiers of AI autonomy, data intelligence, and decentralized computing.
      </p>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>🚀 Our Vision</h2>
        <p className={styles.text}>
          We believe in the power of AI to create self-improving ecosystems, where intelligent agents can operate independently,
          learn from their environment, and enhance automation across multiple domains.
        </p>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>👨‍💻 The Creator</h2>
        <p className={styles.text}>
          Rubus Lab was founded by an AI enthusiast and developer passionate about AI frameworks, automation, and intelligent agents.
          This project is a playground for experimenting with cutting-edge technologies in AI and distributed systems.
        </p>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>📡 Stay Connected</h2>
        <p className={styles.text}>
          Follow us on our journey as we push the boundaries of AI-driven automation. Join the discussion and contribute to our open-source projects.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/0xrubusdata/armind_os" className={styles.link}>GitHub</a>
          <a href="https://x.com/Data0x88850" className={styles.link}>X (Twitter)</a>
        </div>
      </div>
    </div>
  );
}