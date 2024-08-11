import styles from './card.module.css';
import product from '../../../../assets/images/oneProduct.png';
import ChangeCountItems from "../../../ui-components/changeCountItems/changeCountItems.tsx";
import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CartSVG from "../../../svg/cartSVG.tsx";
import {useNavigate} from "react-router-dom";


interface propsFace {
    isDeleted: boolean,
    onClickDeleted: () => void
}

const Card = ({isDeleted, onClickDeleted}: propsFace) => {

    const navigate = useNavigate();


    return (
        <section className={styles.container}>
            <div className={`${styles.nameProduct} ${isDeleted ? styles.opacity : null}`}>
                <img src={product} alt="productImg"/>
                <div>
                    <p onClick={() => navigate("/product/1")} className={styles.title}>Essence Mascara Lash Princess</p>
                    <p className={styles.price}>$110</p>
                </div>
            </div>
            {
                isDeleted ?
                    <DefaultButton svg={<CartSVG/>}/>
                    :
                    <div className={styles.countItems}>
                        <ChangeCountItems items={1}/>
                        <button onClick={onClickDeleted} className={styles.btnDelete}>Delete</button>
                    </div>
            }

        </section>
    );
};

export default Card;
