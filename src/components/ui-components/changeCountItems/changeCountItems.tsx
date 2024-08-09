import styles from './changeCountItems.module.css';
import DefaultButton from "../button/defaultButton.tsx";
import MinusSvg from "../../svg/minusSVG.tsx";
import PlusSvg from "../../svg/plusSVG.tsx";

interface propsFace {
    items: number
}

const ChangeCountItems = ({items}:propsFace) => {
    return (
        <section className={styles.blockCountItems}>
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
        </section>
    );
};

export default ChangeCountItems;
