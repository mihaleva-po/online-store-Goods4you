import styles from './totalPrice.module.css';

const TotalPrice = () => {
    return (
        <section className={styles.totalPrice}>
            <div>
                <p className={styles.nameCount}>Total count</p>
                <p className={styles.count}>3 items</p>
            </div>
            <div className={styles.blockPrice}>
                <p className={styles.namePrice}>Price without discount</p>
                <p className={styles.price}>$700</p>
            </div>
            <div>
                <p className={styles.nameTotalPrice}>Total price</p>
                <p className={styles.total}>$590</p>
            </div>
        </section>
    );
};

export default TotalPrice;
