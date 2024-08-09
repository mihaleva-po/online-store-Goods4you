import styles from './descProduct.module.css';
import Rate from "./rate/rate.tsx";
import DefaultButton from "../../ui-components/button/defaultButton.tsx";

const DescProduct = () => {
    return (
        <section className={styles.container}>
            <div className={styles.mainBlock}>
                <h1>Essence Mascara Lash Princess</h1>
                <div className={styles.blockRate}>
                    <Rate/>
                    <p>electronics, selfie accessories</p>
                </div>
            </div>
            <p className={styles.availability}>In Stock - Only 5 left!</p>
            <p className={styles.description}>The Essence Mascara Lash Princess is a
                popular mascara known for its volumizing and lengthening effects.
                Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
            <div className={styles.warranty}>
                <p>1 month warranty</p>
                <p>Ships in 1 month</p>
            </div>
            <div className={styles.greyBlock}>
                <div className={styles.blockPrice}>
                    <div className={styles.price}>
                        <p className={styles.currentPrice}>$7.17</p>
                        <p className={styles.oldPrice}>$9.99</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.discount}>
                        <p>Your discount:</p>
                        <p className={styles.percent}>14.5%</p>
                    </div>
                </div>
                <DefaultButton text={"Add to cart"}/>
            </div>
        </section>
    );
};

export default DescProduct;
