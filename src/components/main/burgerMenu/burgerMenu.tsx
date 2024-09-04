import styles from "./burgerMenu.module.css";
import CartSVG from "../../svg/cartSVG.tsx";
import {useEffect, useState} from "react";
import CountProducts from "./countProducts/countProducts.tsx";
import {useAuth} from "../../../context/AuthContext.tsx";
import {Link} from "react-router-dom";


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {user} = useAuth();
    const [nameUser, setNameUser] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setNameUser(`${user.firstName} ${user.lastName}`);
        }
    }, [user]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                &#9776;
            </div>

            <nav className={`${styles.menu} ${isOpen ? styles.open : null}`}>
                <Link to="/#catalog">Catalog</Link>
                <Link to="/#faq">FAQ</Link>
                <Link className={styles.cart} to="/cart">
                    Cart
                    <div className={styles.blockCart} aria-label={"cart user"}>
                        <CartSVG/>
                        <CountProducts/>
                    </div>
                </Link>
                <p className={styles.nameUser}>{
                    nameUser || "Sign in"
                }</p>

            </nav>
        </div>
    );
};

export default BurgerMenu;
