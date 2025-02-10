import React from "react";
import styles from "../../styles/Project.module.css";

export default function ArmindOS() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src="/agents/0xrubusdata/0xrubusdata-removebg.png" alt="ArmindOS" className={styles.icon01} /> ArmindOS
      </h1>
      <p className={styles.description}>
        ArmindOS is a framework designed to create networks of AI agents organized into specialized services. 
        It enables seamless communication and task distribution between agents, providing a scalable architecture 
        for AI-driven automation.
      </p>
      
      <h2 className={styles.sectionTitle}>🔍 Features</h2>
      <ul className={styles.list}>
        <li>🛠 Modular AI agent framework</li>
        <li>🔗 Distributed service-based architecture</li>
        <li>📡 Built-in inter-agent communication</li>
        <li>⚡ Optimized for real-time decision making</li>
      </ul>
      
      <h2 className={styles.sectionTitle}>📖 Documentation</h2>
      <p>Check out the full documentation and source code on GitHub:</p>
      <a href="https://github.com/0xrubusdata/armind_os" className={styles.button} target="_blank">
        View on GitHub →
      </a>
    </div>
  );
}
