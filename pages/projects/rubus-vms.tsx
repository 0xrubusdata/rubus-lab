import React from "react";
import styles from "../../styles/Project.module.css";

export default function RubusVMS() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src="/agents/Rubus-VMS.png" alt="Rubus-VMS" className={styles.icon01} /> Rubus-VMS
      </h1>
      <p className={styles.description}>
        Rubus-VMS is a Python-based system that converts structured database records into vectorized memory.
        It is designed to feed AI agents with persistent, retrievable data to enhance their contextual understanding.
      </p>
      
      <h2 className={styles.sectionTitle}>🔍 Features</h2>
      <ul className={styles.list}>
        <li>🧠 Transforms database records into vector memory</li>
        <li>🔍 Enables efficient data retrieval for AI agents</li>
        <li>⚡ Optimized for fast and scalable queries</li>
        <li>📡 Supports integration with multiple vector databases</li>
      </ul>
      
      <h2 className={styles.sectionTitle}>📖 Documentation</h2>
      <p>Explore the full documentation and source code on GitHub:</p>
      <a href="https://github.com/0xrubusdata/rubus-vms" className={styles.button} target="_blank">
        View on GitHub →
      </a>
    </div>
  );
}
