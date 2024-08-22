import styles from './itemsProduct.module.css';
import Card from "./card/card.tsx";
import {useState} from "react";
import {Product} from "../../../redux/slices/cartsSlice.ts";

interface PropsFace {
    products: Product[]
}

const ItemsProduct = ({products}: PropsFace) => {

    const [data, setData] = useState(
        new Array(products.length).fill({
            isDeleted: false,
        }));

    const onClickDeleted = (index: number) => {
        setData(prevData =>
            prevData.map((el, i) => (
                i === index ? {...el, isDeleted: true} : el
            ))
        )
    }

    return (
        <section className={styles.container}>
            {
                products.map((product: Product, i: number) => (
                    <div key={i}>
                        <Card products={products} product={product} isDeleted={data[i]?.isDeleted}
                              onClickDeleted={() => onClickDeleted(i)}/>
                    </div>
                ))
            }
        </section>
    );
};

export default ItemsProduct;
