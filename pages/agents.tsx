import React from "react";
import styles from "../styles/Agents.module.css";

const agentsTop = [
  {
    name: "0xRubusData",
    description: "Analyzes crypto data and predicts trends to help you make informed decisions.",
    image: "/agents/0xrubusdata/0xrubusdata-removebg.png",
    socials: {
      twitter: "https://x.com/Data0x88850",
    },
    status: "Active",
  },
  {
    name: "0xRubusVms",
    description: "Empowers AI agents with structured, persistent memory for smarter decisions.",
    image: "/agents/0xRubusVms.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusOracle",
    description: "Safeguards AI strategies by verifying critical decisions before execution.",
    image: "/agents/ollama.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusCron",
    description: "Continuously gathers and updates data sources to fuel AI intelligence.",
    image: "/agents/Rubus-Cron.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
];

const agentsHack = [
  {
    name: "0xRubusSentinel",
    description: "Monitors, validates, and controls AI security operations to ensure ethical and legal compliance.",
    image: "/agents/0xRubusSentinel.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusPhantom",
    description: "General Recon & Pentesting (vulnerability scanning, basic exploitation).",
    image: "/agents/0xRubusPhantom.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusShadow",
    description: "Exfiltration & Network Sniffing (leak detection and network packet analysis).",
    image: "/agents/0xRubusShadow.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusCipher",
    description: "Bruteforce & Cryptanalysis (password and encryption strength testing).",
    image: "/agents/0xRubusCipher.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusSpectre",
    description: "Social Engineering & Phishing Simulation (human vulnerability testing).",
    image: "/agents/0xRubusSpectre.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusEclipse",
    description: "Red Team Offensive Ops (advanced simulations of internal/external attacks).",
    image: "/agents/0xRubusEclipse.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
];

const agentsSpiritual = [
  {
    name: "0xRubusSage",
    description: "Ultimate guardian of the network, master of knowledge and supreme validator of the actions of all your agents. 🔵💡A cyber-mystical being with a powerful aura, floating in a sacred digital space. 🌌🔥",
    image: "/agents/0xRubusSage.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusDeva",
    description: "",
    image: "/agents/0xRubusDeva.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusDharma",
    description: "",
    image: "/agents/0xRubusDharma.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusKhalsa",
    description: "",
    image: "/agents/0xRubusKhalsa.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusNoor",
    description: "",
    image: "/agents/0xRubusNoor.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "0xRubusPax",
    description: "",
    image: "/agents/0xRubusPax.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
];

export default function Agents() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={styles.title}>Our Agents</h1>
      <div className={styles.AgentGrid}>
        {agentsTop.map((agent, index) => (
          <div key={index} className={styles.AgentCard}>
            <img
              src={agent.image}
              alt={agent.name}
              className={styles.AgentImage}
            />
            <h2 className={styles.AgentName}>{agent.name}</h2>
            <p className={styles.AgentDescription}>{agent.description}</p>
            <div className={styles.AgentSocials}>
              {agent.socials.twitter && (
                <a
                  href={agent.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
            <p
              className={`${styles.AgentStatus} ${
                agent.status === "Active"
                  ? styles.Active
                  : styles.InDevelopment
              }`}
            >
              {agent.status}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.AgentGrid}>
        {agentsHack.map((agent, index) => (
          <div key={index} className={styles.AgentCard}>
            <img
              src={agent.image}
              alt={agent.name}
              className={styles.AgentImage}
            />
            <h2 className={styles.AgentName}>{agent.name}</h2>
            <p className={styles.AgentDescription}>{agent.description}</p>
            <div className={styles.AgentSocials}>
              {agent.socials.twitter && (
                <a
                  href={agent.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
            <p
              className={`${styles.AgentStatus} ${
                agent.status === "Active"
                  ? styles.Active
                  : styles.InDevelopment
              }`}
            >
              {agent.status}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.AgentGrid}>
        {agentsSpiritual.map((agent, index) => (
          <div key={index} className={styles.AgentCard}>
            <img
              src={agent.image}
              alt={agent.name}
              className={styles.AgentImage}
            />
            <h2 className={styles.AgentName}>{agent.name}</h2>
            <p className={styles.AgentDescription}>{agent.description}</p>
            <div className={styles.AgentSocials}>
              {agent.socials.twitter && (
                <a
                  href={agent.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
            <p
              className={`${styles.AgentStatus} ${
                agent.status === "Active"
                  ? styles.Active
                  : styles.InDevelopment
              }`}
            >
              {agent.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
