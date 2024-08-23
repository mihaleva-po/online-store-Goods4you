import styles from './card.module.css';
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";
import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CartSVG from "../../../svg/cartSVG.tsx";
import {useNavigate} from "react-router-dom";
import {Product, putUserCart} from "../../../../redux/slices/cartsSlice.ts";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store.ts";


interface propsFace {
    product: Product,
    products: Product[]
}

const Card = ({products, product}: propsFace) => {

    const navigate = useNavigate();

    const [currentPrice, setCurrentPrice] = useState<number>();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (product) {
            const newDiscount = product.discountPercentage !== undefined ? product.discountPercentage : 0;
            const newPrice = Number((product.price * (100 - newDiscount) / 100).toFixed(2));

            setCurrentPrice(newPrice);
        }
    }, [product]);

    return (
        <section className={styles.container}>
            <div className={`${styles.nameProduct} ${product.isDeleted ? styles.opacity : null}`}>
                <img
                    className={(product.id === 134 || product.id === 6) ? "imgClip" : undefined}
                    src={product.thumbnail} alt="productImg"/>
                <div>
                    <p onClick={() => navigate(`/product/${product.id}`)}
                       className={styles.title}>{product.title}</p>
                    <p className={styles.price}>${currentPrice}</p>
                </div>
            </div>
            {
                product.isDeleted ?
                    <DefaultButton svg={<CartSVG/>}
                                   onClick={() => dispatch(putUserCart({
                                       idProduct: product.id,
                                       quantity: 1, products: products
                                   }))}/>
                    :
                    <div className={styles.countItems}>
                        <ChangeCountItems
                            id={product.id}
                            products={products} items={product.quantity}/>

                        <button onClick={() => dispatch(putUserCart({
                            idProduct: product.id,
                            quantity: 0, products: products
                        }))} className={styles.btnDelete}>Delete
                        </button>
                    </div>
            }
        </section>
    );
};

export default Card;
