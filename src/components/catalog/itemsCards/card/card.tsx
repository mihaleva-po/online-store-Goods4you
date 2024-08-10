import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CardSVG from "../../../svg/cartSVG.tsx";
import styles from './card.module.css';
import product from '../../../../assets/images/product.png';
import {useNavigate} from "react-router-dom";
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";

interface propsFace {
    items: number,
    price: number
}


const Card = ({items, price}:propsFace) => {

    const navigate = useNavigate();

    const onClickCard = () => {
        navigate("/product/1");
    }

    return (
        <section onClick={onClickCard} className={styles.section}>
            <img src={product} alt="productImg"/>
            <div className={styles.desc}>
                <div>
                    <p className={styles.title}>Essence Mascara Lash Princess</p>
                    <p className={styles.price}>${price}</p>
                </div>


                {
                    items === 0 ?
                        <DefaultButton svg={<CardSVG/>} />
                        :
                        <ChangeCountItems items={items}/>

                }

            </div>
        </section>
    );
};

export default Card;
