import React from "react";
import styles from "../styles/Project.module.css";

const projects = [
  {
    id: "armindos",
    title: "ArmindOS",
    description: "A framework for building AI agent networks organized into services.",
    link: "/projects/armindos",
    alt: "ArmindOS",
    img: "/agents/0xrubusdata/0xrubusdata-removebg.png", 
  },
  {
    id: "rubus-cron",
    title: "Rubus-Cron",
    description: "A customizable cron system for retrieving data from multiple sources and storing it in a database.",
    link: "/projects/rubus-cron",
    alt: "Rubus-Cron",
    img: "/agents/Rubus-Cron.png",
  },
  {
    id: "ollama-api",
    title: "Ollama API",
    description: "A microservice API to run AI models locally for enhanced efficiency.",
    link: "/projects/ollama-api",
    alt: "Ollama API",
    img: "/agents/ollama.png",
  },
  {
    id: "rubus-vms",
    title: "Rubus-VMS",
    description: "A Python application that converts database-stored data into vector memory to feed AI agents.",
    link: "/projects/rubus-vms",
    alt: "Rubus-VMS",
    img: "/agents/0xRubusVms.png",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <img src="/icons8-favicon-16.ico" alt="0xRubusData" className={styles.icon01} /> Our Projects
      </h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.section}>
            <div key={project.id} className={styles.card}>
              <img src={project.img} alt={project.alt} className={styles.icon01} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className={styles.button}>Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
