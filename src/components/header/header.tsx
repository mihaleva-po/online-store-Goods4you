import styles from './header.module.css';
import HeaderOrFooter from "../main/headerOrFooter.tsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderOrFooter isHeader={true}/>
        </header>
    );
};

export default Header;
