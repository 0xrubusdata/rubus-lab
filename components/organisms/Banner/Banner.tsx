import React, { useState } from "react";
import styles from "../../../styles/Banner.module.css";

const agents = [
  "/agents/banner/0xRubusSage.webp",
  "/agents/banner/0xRubusData.webp",
  "/agents/banner/0xRubusSentinel.webp",
  "/agents/banner/0xRubusCipher.webp",
  "/agents/banner/0xRubusEclipse.webp",
  "/agents/banner/0xRubusPhantom.webp",
  "/agents/banner/0xRubusShadow.webp",
  "/agents/banner/0xRubusSpectre.webp",
  "/agents/banner/0xRubusVms.webp",
  "/agents/banner/0xRubusOracle.webp",
  "/agents/banner/0xRubusCron.webp",
  "/agents/banner/0xRubusGogh.webp",
  "/agents/banner/0xRubusNeoclassical.webp",
  "/agents/banner/0xRubusPax.webp",
  "/agents/banner/0xRubusNoor.webp",
  "/agents/banner/0xRubusKhalsa.webp",
  "/agents/banner/0xRubusDharma.webp",
  "/agents/banner/0xRubusDeva.webp",
];

const Banner: React.FC = () => {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  // Function to extract the agent's name from the path
  const extractName = (src: string): string => {
    const parts = src.split("/");
    return parts[parts.length - 1].replace(".webp", "").replace(/_/g, " ");
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerTrack}>
        {agents.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Agent ${index + 1}`}
            className={styles.bannerImage}
            onMouseOver={() => src && setHoveredAgent(extractName(src))}
            onMouseOut={() => setHoveredAgent(null)}
          />
        ))}
        {agents.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            alt={`Agent duplicate ${index + 1}`}
            className={styles.bannerImage}
            onMouseOver={() => src && setHoveredAgent(extractName(src))}
            onMouseOut={() => setHoveredAgent(null)}
          />
        ))}
      </div>
      {hoveredAgent && <div className={styles.agentTooltip}>{hoveredAgent}</div>}
    </div>
  );
};

export default Banner;
