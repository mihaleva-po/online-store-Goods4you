import styles from "./burgerMenu.module.css";
import CartSVG from "../../svg/cartSVG.tsx";
import {useState} from "react";
import CountProducts from "./countProducts/countProducts.tsx";


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                &#9776;
            </div>

            <nav className={`${styles.menu} ${isOpen ? styles.open : null}`}>
                <a href="/#catalog">Catalog</a>
                <a href="/#faq">FAQ</a>
                <a className={styles.cart} href="/cart">
                    Cart
                    <div className={styles.blockCart}>
                        <CartSVG/>
                        <CountProducts/>
                    </div>
                </a>
                <p className={styles.nameUser}>Johnson Smith</p>


            </nav>
        </div>
    );
};

export default BurgerMenu;
