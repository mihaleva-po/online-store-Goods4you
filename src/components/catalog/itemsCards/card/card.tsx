import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CardSVG from "../../../svg/cartSVG.tsx";
import styles from './card.module.css';
// import product from '../../../../assets/images/product.png';
import {useNavigate} from "react-router-dom";
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";
import {Product} from "../../../../redux/services/searchProducts.ts";


const Card = ({id, title, price, discountPercentage, images}: Product) => {

    const items = 0;

    const navigate = useNavigate();

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
                        {Number((price * (discountPercentage ? 1 - discountPercentage/100 : 1)).toFixed(2))}
                    </p>
                </div>

                <div onClick={(event) => event.stopPropagation()}>
                    {
                        items === 0 ?
                            <DefaultButton svg={<CardSVG/>}/>
                            :
                            <ChangeCountItems items={items}/>
                    }
                </div>
            </div>
        </section>
    );
};

export default Card;
