import React from "react";
import styles from "../../styles/Project.module.css";

export default function RubusCron() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src="/agents/Rubus-Cron.png" alt="Rubus-Cron" className={styles.icon01} /> Rubus-Cron
      </h1>
      <p className={styles.description}>
        Rubus-Cron is a customizable cron system designed to fetch data from multiple sources and store it in a structured database.
        It allows for flexible scheduling and data retrieval tailored to specific needs.
      </p>
      
      <h2 className={styles.sectionTitle}>🔍 Features</h2>
      <ul className={styles.list}>
        <li>⏳ Automated data retrieval on schedule</li>
        <li>📡 Supports multiple data sources</li>
        <li>⚙️ Customizable extraction logic</li>
        <li>💾 Stores structured data in a database</li>
      </ul>
      
      <h2 className={styles.sectionTitle}>📖 Documentation</h2>
      <p>Explore the full documentation and source code on GitHub:</p>
      <a href="https://github.com/0xrubusdata/rubus-cron" className={styles.button} target="_blank">
        View on GitHub →
      </a>
    </div>
  );
}
