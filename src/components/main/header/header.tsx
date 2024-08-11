import styles from './header.module.css';
import BurgerMenu from "../burgerMenu/burgerMenu.tsx";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a className={styles.aLogo} href={"/"}>
                    <h1>Goods4you</h1>
                </a>
                <BurgerMenu/>
            </div>
        </header>
    );
};

export default Header;
