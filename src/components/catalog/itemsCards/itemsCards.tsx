import Card from "./card/card.tsx";
import styles from './itemsCard.module.css';
import {ProductCatalog} from "../../../types/type.ts";


interface PropsFace {
    data: ProductCatalog[]
}

const ItemsCards = ({data}: PropsFace) => {

    return (
        <section className={styles.container}>
            {
                data.map((product, i) => (
                    <article key={i}>
                        <Card id={product?.id} images={product?.images}
                              title={product?.title} price={product?.price}
                              discountPercentage={product?.discountPercentage}/>
                    </article>
                ))
            }
        </section>
    );
};

export default ItemsCards;
