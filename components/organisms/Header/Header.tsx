// components/organisms/Header/Header.tsx
import Image from 'next/image';
import styles from '../../../styles/Header.module.css';

interface HeaderProps {
    title: string;    // Title to display in the header
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            
        </header>
    );
};

export default Header;