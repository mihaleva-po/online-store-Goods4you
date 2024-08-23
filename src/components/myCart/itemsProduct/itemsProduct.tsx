import styles from './itemsProduct.module.css';
import Card from "./card/card.tsx";
import {useCart} from "../../../context/CartContext.tsx";
import {ProductCart} from "../../../types/type.ts";


const ItemsProduct = () => {

    const {cart} = useCart();

    return (
        <section className={styles.container}>
            {
                cart?.products?.map((product: ProductCart, i: number) => (
                    <div key={i}>
                        <Card product={product}/>
                    </div>
                ))
            }
        </section>
    );
};

export default ItemsProduct;
