import styles from './footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <div className={styles.container}>
                    <a className={styles.aLogo} href={"/"}>
                        <h1>Goods4you</h1>
                    </a>
                    <nav className={styles.menu}>
                        <a href="/#catalog">Catalog</a>
                        <a href="/#faq">FAQ</a>
                    </nav>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
