import styles from './itemsProduct.module.css';
import Card from "./card/card.tsx";
import {useState} from "react";

const ItemsProduct = () => {

    const [data, setData] = useState([
        {
            isDeleted: false,
        },
        {
            isDeleted: false,
        },
        {
            isDeleted: false,
        },
        {
            isDeleted: true,
        },
    ]);

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
                data.map((el, i) => (
                    <div key={i}>
                        <Card isDeleted={el.isDeleted} onClickDeleted={()=>onClickDeleted(i)}/>
                    </div>
                ))
            }
        </section>
    );
};

export default ItemsProduct;
