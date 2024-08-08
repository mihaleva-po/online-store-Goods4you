import DefaultButton from "../../../ui-components/button/defaultButton.tsx";
import CardSVG from "../../../svg/cartSVG.tsx";
// import card from ''
import styles from './card.module.css';
import product from '../../../../assets/images/product.png';
import MinusSvg from "../../../svg/minusSVG.tsx";
import PlusSvg from "../../../svg/plusSVG.tsx";

interface propsFace {
    items: number,
    price: number
}


const Card = ({items, price}:propsFace) => {
    return (
        <section className={styles.section}>
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
                        <div className={styles.blockCountItems}>
                            <DefaultButton svg={<MinusSvg/>} />
                            <div className={styles.containerCount}>
                                <p className={styles.countItems}>{items}
                                    {
                                        items > 1 ?
                                            " items" : " item"
                                    }
                                    </p>
                            </div>

                            <DefaultButton svg={<PlusSvg/>} />
                        </div>
                }

            </div>
        </section>
    );
};

export default Card;
