import styles from './hero.module.css';
import DefaultButton from "../../ui-components/button/defaultButton.tsx";


export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Any products from famous brands <br/> with worldwide delivery</h1>
                <p className={styles.text}>We sell smartphones, laptops, clothes, shoes <br/> and many other products at
                    low prices</p>
                <a href={"/#catalog"} className={styles.containerBtn}>
                    <DefaultButton text={"Go to shopping"}/>
                </a>

                <h2>Goods4you</h2>
            </div>
        </section>
    );
};


