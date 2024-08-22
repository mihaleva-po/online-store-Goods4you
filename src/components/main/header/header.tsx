import styles from './header.module.css';
import BurgerMenu from "../burgerMenu/burgerMenu.tsx";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.aLogo} to={"/"}>
                    <h1>Goods4you</h1>
                </Link>
                <BurgerMenu/>
            </div>
        </header>
    );
};

export default Header;
