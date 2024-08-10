import styles from './headerOrFooter.module.css';
import CartSVG from "../svg/cartSVG.tsx";

interface props {
    isHeader: boolean
}

const HeaderOrFooter = ({isHeader}: props) => {
    return (
        <div>
            <div className={styles.container}>
                <h1>Goods4you</h1>
                <nav>
                    <a href="/t">Catalog</a>
                    <a href="/t">FAQ</a>
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
        </div>
    );
};

export default HeaderOrFooter;
