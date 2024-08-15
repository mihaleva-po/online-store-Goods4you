import styles from './countProducts.module.css';
import {useCart} from "../../../../context/CartContext.tsx";


const CountProducts = () => {
    const cart = useCart();
    const totalQuantity = cart.totalQuantity;

    return (
        <section>
            {
                totalQuantity > 0 ?
                    <div className={styles.circle}>
                        <p>{totalQuantity}</p>
                    </div>
                    : null
            }
        </section>

    );
};

export default CountProducts;
