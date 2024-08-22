import styles from './totalPrice.module.css';
import {CartsSlice} from "../../../redux/slices/cartsSlice.ts";

interface Props {
    cart: CartsSlice
}

const TotalPrice = ({cart}: Props) => {

    return (
        <section className={styles.totalPrice}>
            <div>
                <p className={styles.nameCount}>Total count</p>
                <p className={styles.count}>{cart.totalProducts} items</p>
            </div>
            <div className={styles.blockPrice}>
                <p className={styles.namePrice}>Price without discount</p>
                <p className={styles.price}>${Number((cart.total).toFixed(2))}</p>
            </div>
            <div>
                <p className={styles.nameTotalPrice}>Total price</p>
                <p className={styles.total}>${Number((cart.discountedTotal).toFixed(2))}</p>
            </div>
        </section>
    );
};

export default TotalPrice;
