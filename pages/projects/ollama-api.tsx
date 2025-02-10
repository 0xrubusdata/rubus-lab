import React from "react";
import styles from "../../styles/Project.module.css";

export default function OllamaAPI() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src="/agents/ollama.png" alt="Ollama API" className={styles.icon01} /> Ollama API
      </h1>
      <p className={styles.description}>
        Ollama API is a microservice that provides a local AI model execution environment.
        It enables efficient inference without relying on cloud-based services, ensuring data privacy and low latency.
      </p>
      
      <h2 className={styles.sectionTitle}>🔍 Features</h2>
      <ul className={styles.list}>
        <li>⚡ Fast and efficient local model inference</li>
        <li>🔒 Ensures data privacy by running on-premise</li>
        <li>🔗 API-based access for seamless integration</li>
        <li>📡 Supports multiple AI models</li>
      </ul>
      
      <h2 className={styles.sectionTitle}>📖 Documentation</h2>
      <p>Explore the full documentation and source code on GitHub:</p>
      <a href="https://github.com/0xrubusdata/model-ai_microservice" className={styles.button} target="_blank">
        View on GitHub →
      </a>
    </div>
  );
}
