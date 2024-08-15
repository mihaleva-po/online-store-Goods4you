import styles from './card.module.css';
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";
import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CartSVG from "../../../svg/cartSVG.tsx";
import {useNavigate} from "react-router-dom";
import {Product} from "../../../../redux/slices/cartsSlice.ts";


interface propsFace {
    isDeleted: boolean,
    onClickDeleted: () => void,
    product: Product,
}

const Card = ({product, isDeleted, onClickDeleted}: propsFace) => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={`${styles.nameProduct} ${isDeleted ? styles.opacity : null}`}>
                <img
                    className={`${product.id === 134 ? "imgClip" : null}`}
                    src={product.thumbnail} alt="productImg"/>
                <div>
                    <p onClick={() => navigate(`/product/${product.id}`)}
                       className={styles.title}>{product.title}</p>
                    <p className={styles.price}>${product.price}</p>
                </div>
            </div>
            {
                isDeleted ?
                    <DefaultButton svg={<CartSVG/>}/>
                    :
                    <div className={styles.countItems}>
                        <ChangeCountItems items={product.quantity}/>
                        <button onClick={onClickDeleted} className={styles.btnDelete}>Delete</button>
                    </div>
            }
        </section>
    );
};

export default Card;
