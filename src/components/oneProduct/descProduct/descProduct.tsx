import styles from './descProduct.module.css';
import Rate from "./rate/rate.tsx";
import DefaultButton from "../../ui-components/button/defaultButton.tsx";
import {Product} from "../../../redux/services/searchProducts.ts";
import {useEffect, useState} from "react";
import React from "react";
import ChangeCountItems from "../../ui-components/changeCountItems/changeCountItems.tsx";
import {useCart} from "../../../context/CartContext.tsx";


interface PropsFace {
    data: Product
}

const DescProduct = ({data}: PropsFace) => {

    const {cart} = useCart();
    const product = cart.products.find(el => el.id === data.id);
    const items = product?.quantity ? product?.quantity : 0;

    const [currentPrice, setCurrentPrice] = useState<number>();

    useEffect(() => {
        if (data) {
            const newDiscount = data.discountPercentage !== undefined ? data.discountPercentage : 0;
            const newPrice = Number((data.price * (100 - newDiscount) / 100).toFixed(2));

            setCurrentPrice(newPrice);
        }
    }, [data]);

    return (
        <section className={styles.container}>
            <article className={styles.mainBlock}>
                <h1>{data.title}</h1>
                <div className={styles.blockRate}>
                    <Rate rating={data.rating}/>

                    <div className={styles.containerTags}>
                        {data?.tags?.map((el, i, arr) => (
                            <React.Fragment key={i}>
                                <p>{el}</p>
                                {i < arr.length - 1 && <span>,&nbsp;</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </article>
            <p className={styles.availability}>{data.availabilityStatus}</p>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.warranty}>
                <p>{data.warrantyInformation}</p>
                <p>{data.shippingInformation}</p>
            </div>
            <article className={styles.greyBlock}>
                <div className={styles.blockPrice}>
                    <div className={styles.price}>
                        <p className={styles.currentPrice}>${currentPrice}</p>
                        <p className={styles.oldPrice}>${data.price}</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.discount}>
                        <p>Your discount:</p>
                        <p className={styles.percent}>{data.discountPercentage}%</p>
                    </div>
                </div>
                {
                    items === 0 ?
                        <DefaultButton text={"Add to cart"}/>
                        :
                        <ChangeCountItems items={items}/>
                }

            </article>
        </section>
    );
};

export default DescProduct;
