import Card from "./card/card.tsx";
import styles from './itemsCard.module.css';
import {Product} from "../../../redux/services/searchProducts.ts";

interface PropsFace {
    data: Product[]
}

const ItemsCards = ({data}: PropsFace) => {

    return (
        <section className={styles.container}>
            {
                data.map((product, i) => (
                    <article key={i}>
                        <Card id={product.id} images={product.images}
                              title={product.title} price={product.price}
                              discountPercentage={product.discountPercentage}/>
                    </article>
                ))
            }
        </section>
    );
};

export default ItemsCards;
