import { FC } from 'react';
import MainContent from '../components/organisms/MainContent/MainContent';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
    const links = [
      { href: "https://github.com/0xrubusdata/armind_os", label: "GitHub" },
      { href: "https://x.com/Data0x88850", label: "X (Twitter)" },
    ];

    const typewriterLines = [
      "Welcome to Rubus Lab.",
      "Exploring AI autonomy and automation.",
      "Building intelligent agents that shape the future.",
    ];

    return (
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1 className={styles.title}>
            <img src="/icons8-favicon-16.ico" alt="0xRubusData" className={styles.icon01} /> Welcome to Rubus Lab
          </h1>
          <p className={styles.subtitle}>Pioneering AI-driven automation and intelligence.</p>
        </header>
        
        <MainContent 
          description="Rubus Lab is an experimental space dedicated to AI autonomy, data intelligence, and automation. This platform hosts multiple projects focusing on AI agents, data processing, and vectorized memory."
          links={links}
          typewriterLines={typewriterLines}
        />

        <section className={styles.projectsOverview}>
          <h2>🔍 Our Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <h3>
                <img src="/agents/0xrubusdata/0xrubusdata-removebg.png" alt="ArmindOS" className={styles.icon01} /> ArmindOS
              </h3>
              <p>AI Agent Framework</p>
            </div>
            <div className={styles.projectCard}>
              <h3>
                <img src="/agents/Rubus-Cron.png" alt="Rubus-Cron" className={styles.icon01} /> Rubus-Cron
              </h3>
              <p>Customizable Data Retrieval System</p>
            </div>
            <div className={styles.projectCard}>
              <h3>
                <img src="/agents/ollama.png" alt="Ollama API" className={styles.icon01} /> Ollama API
              </h3>
              <p>Local AI Model Microservice</p>
            </div>
            <div className={styles.projectCard}>
              <h3>
                <img src="/agents/Rubus-VMS.png" alt="Rubus-VMS" className={styles.icon01} /> Rubus-VMS
              </h3>
              <p>Vectorized Memory System for AI</p>
            </div>
          </div>
          <a href="/projects" className={styles.link}>Discover More →</a>
        </section>

        <section className={styles.getInvolved}>
          <h2>🚀 Get Involved</h2>
          <p>Follow us and contribute to the development of AI-driven automation.</p>
          <div className={styles.buttonContainer}>
            <a href="https://github.com/0xrubusdata/armind_os" className={styles.button}>GitHub</a>
            <a href="https://x.com/Data0x88850" className={styles.button}>X (Twitter)</a>
          </div>
        </section>
      </div>  
    );
};

export default Home;
