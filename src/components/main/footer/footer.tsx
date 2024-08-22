import styles from './footer.module.css';
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <div className={styles.container}>
                    <Link className={styles.aLogo} to={"/"}>
                        <h1>Goods4you</h1>
                    </Link>
                    <nav className={styles.menu}>
                        <Link to="/#catalog">Catalog</Link>
                        <Link to="/#faq">FAQ</Link>
                    </nav>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
