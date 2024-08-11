import {useState} from "react";
import Card from "./card/card.tsx";
import styles from './itemsCard.module.css';

const ItemsCards = () => {

    const [data] = useState(
        {
            id: 0,
            name: '',
            img: '',
            price: 110,
            count: 0,
        }
    );


    return (
        <section className={styles.container}>
            {
                new Array(12).fill(data).map((el, i) => (
                    <article key={i}>
                        <Card price={el.price} items={el.count + (i%3)}/>
                    </article>
                ))
            }
        </section>
    );
};

export default ItemsCards;
