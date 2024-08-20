import styles from './myCart.module.css';
import ItemsProduct from "./itemsProduct/itemsProduct.tsx";
import TotalPrice from "./totalPrice/totalPrice.tsx";
import {Helmet} from "react-helmet-async";
import {useCart} from "../../context/CartContext.tsx";


const MyCart = () => {

    const {cart} = useCart();

    return (
        <section className={styles.myCart}>
            <Helmet>
                <title>My cart | Goods4you</title>
            </Helmet>
            <div className={styles.container}>
                <h1>My cart</h1>
                {
                    cart.totalQuantity > 0 ?
                        <div className={styles.main}>
                            <ItemsProduct products={cart.products}/>
                            <TotalPrice cart={cart}/>
                        </div>
                        :
                        <p className={styles.noItems}>No items</p>
                }
            </div>
        </section>
    );
};

export default MyCart;
