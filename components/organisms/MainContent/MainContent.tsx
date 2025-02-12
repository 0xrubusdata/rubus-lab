// components/organisms/MainContent/MainContent.tsx
import React from 'react';
import styles from '../../../styles/MainContent.module.css';
import Typewriter from '../../atoms/Typewriter';
import ExternalLink from '@/components/atoms/Link/ExternalLink';

interface LinkItem {
  href: string;
  label: string;
}

interface MainContentProps {
  description: string;
  links: LinkItem[];
  typewriterLines: string[];
}

const MainContent: React.FC<MainContentProps> = ({ description, links, typewriterLines }) => {
  return (
    <main className={styles.main}>
      <div className={styles.linksContainer}> {/* Add a container for the links */}
        {description}
      </div>
      <Typewriter lines={typewriterLines} />
    </main>
  );
};

export default MainContent;