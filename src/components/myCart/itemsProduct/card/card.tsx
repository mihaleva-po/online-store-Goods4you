import styles from './card.module.css';
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";
import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CartSVG from "../../../svg/cartSVG.tsx";
import {useNavigate} from "react-router-dom";
import {Product} from "../../../../redux/slices/cartsSlice.ts";
import {useEffect, useState} from "react";


interface propsFace {
    isDeleted: boolean,
    onClickDeleted: () => void,
    product: Product,
    products: Product[]
}

const Card = ({products, product, isDeleted, onClickDeleted}: propsFace) => {

    const navigate = useNavigate();

    const [currentPrice, setCurrentPrice] = useState<number>();

    useEffect(() => {
        if (product) {
            const newDiscount = product.discountPercentage !== undefined ? product.discountPercentage : 0;
            const newPrice = Number((product.price * (100 - newDiscount) / 100).toFixed(2));

            setCurrentPrice(newPrice);
        }
    }, [product]);

    return (
        <section className={styles.container}>
            <div className={`${styles.nameProduct} ${isDeleted ? styles.opacity : null}`}>
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
                isDeleted ?
                    <DefaultButton svg={<CartSVG/>}/>
                    :
                    <div className={styles.countItems}>
                        <ChangeCountItems id={product.id} products={products} items={product.quantity}/>
                        <button onClick={onClickDeleted} className={styles.btnDelete}>Delete</button>
                    </div>
            }
        </section>
    );
};

export default Card;
