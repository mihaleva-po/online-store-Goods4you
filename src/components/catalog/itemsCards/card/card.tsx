import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CardSVG from "../../../svg/cartSVG.tsx";
import styles from './card.module.css';
import {useNavigate} from "react-router-dom";
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";
import {useCart} from "../../../../context/CartContext.tsx";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store.ts";
import {putUserCart} from "../../../../redux/slices/cartsSlice.ts";
import {ProductCatalog} from "../../../../types/type.ts";


const Card = ({id, title, price, discountPercentage, images}: ProductCatalog) => {

    const {cart} = useCart();
    const product = cart?.products?.find(el => el?.id === id);
    const items = product?.quantity ? product?.quantity : 0;

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section onClick={() => navigate(`/product/${id}`)} className={styles.section}>
            <figure className={styles.containerImg}>
                <img src={images[0]} alt="productImg"/>
            </figure>

            <div className={styles.showDetails}>
                <p>Show details</p>
            </div>

            <div className={styles.desc}>
                <div>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>$
                        {Number((price * (discountPercentage ? 1 - discountPercentage / 100 : 1)).toFixed(2))}
                    </p>
                </div>

                <div onClick={(event) => event.stopPropagation()}>
                    {
                        items === 0 ?
                            <DefaultButton svg={<CardSVG/>}
                                           onClick={() => dispatch(putUserCart({
                                               idProduct: id,
                                               quantity: 1,
                                               products: cart?.products
                                           }))}/>
                            :
                            <ChangeCountItems id={id} products={cart?.products} items={items}/>
                    }
                </div>
            </div>
        </section>
    );
};

export default Card;
