import styles from './headerOrFooter.module.css';
import CartSVG from "../svg/cartSVG.tsx";


interface props {
    isHeader: boolean
}

const HeaderOrFooter = ({isHeader}: props) => {

    return (
        <section>
            <div className={styles.container}>
                <a className={styles.aLogo} href={"/"}>
                    <h1>Goods4you</h1>
                </a>

                <nav className={styles.navigation}>
                    <a href="/#catalog">Catalog</a>
                    <a href="/#faq">FAQ</a>
                    {
                        isHeader &&
                        <>
                            <a className={styles.cart} href="/cart">
                                Cart
                                <div className={styles.blockCart}>
                                    <CartSVG/>
                                    <div className={styles.circle}>
                                        <p>1</p>
                                    </div>
                                </div>
                            </a>
                            <p className={styles.nameUser}>Johnson Smith</p>
                        </>

                    }

                </nav>
            </div>
        </section>
    );
};

export default HeaderOrFooter;
