import styles from './hero.module.css';
import DefaultButton from "../../ui-components/button/defaultButton.tsx";


export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Any products from famous brands <br/> with worldwide delivery</h1>
                <p className={styles.text}>We sell smartphones, laptops, clothes, shoes <br/> and many other products at
                    low prices</p>

                <DefaultButton text={"Go to shopping"}/>
                <h2>Goods4you</h2>
            </div>
        </section>
    );
};


