import styles from './itemsProduct.module.css';
import Card from "./card/card.tsx";
import {Product} from "../../../redux/slices/cartsSlice.ts";

interface PropsFace {
    products: Product[]
}

const ItemsProduct = ({products}: PropsFace) => {

    return (
        <section className={styles.container}>
            {
                products.map((product: Product, i: number) => (
                    <div key={i}>
                        <Card products={products} product={product}/>
                    </div>
                ))
            }
        </section>
    );
};

export default ItemsProduct;
