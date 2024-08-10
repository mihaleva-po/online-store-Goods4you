import styles from './myCart.module.css';
import ItemsProduct from "./itemsProduct/itemsProduct.tsx";
import TotalPrice from "./totalPrice/totalPrice.tsx";
import {Helmet} from "react-helmet-async";


const MyCart = () => {
    return (
        <section className={styles.myCart}>
            <Helmet>
                <title>My cart | Goods4you</title>
            </Helmet>
            <div className={styles.container}>
                <h1>My cart</h1>
                <div className={styles.main}>
                    <ItemsProduct/>
                    <TotalPrice/>
                </div>
            </div>
        </section>
    );
};

export default MyCart;
