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
                    <a href="">Catalog</a>
                    <a href="">FAQ</a>
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
                            <a href="">Johnson Smith</a>
                        </>

                    }

                </nav>
            </div>
        </div>
    );
};

export default HeaderOrFooter;
