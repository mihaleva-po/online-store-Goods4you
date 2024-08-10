import styles from './footer.module.css';
import HeaderOrFooter from "../headerOrFooter.tsx";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <HeaderOrFooter isHeader={false}/>

        </footer>
    );
};

export default Footer;
