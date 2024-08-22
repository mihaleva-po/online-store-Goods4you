import styles from './changeCountItems.module.css';
import DefaultButton from "../button/defaultButton.tsx";
import MinusSvg from "../../svg/minusSVG.tsx";
import PlusSvg from "../../svg/plusSVG.tsx";
import {Product, putUserCart} from "../../../redux/slices/cartsSlice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store.ts";

interface propsFace {
    items: number,
    id?: number,
    products: Product[],
}

const ChangeCountItems = ({id, products, items}: propsFace) => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <section className={styles.blockCountItems}>
            <DefaultButton svg={<MinusSvg/>}
                           onClick={() => dispatch(putUserCart({
                               idProduct: id,
                               quantity: items - 1,
                               products: products
                           }))}/>
            <div className={styles.containerCount}>
                <p className={styles.countItems}>{items}
                    {
                        items > 1 ? " items" : <>&nbsp;item&nbsp;&nbsp;</>
                    }
                </p>
            </div>
            <DefaultButton svg={<PlusSvg/>}
                           onClick={() => dispatch(putUserCart({
                               idProduct: id,
                               quantity: items + 1,
                               products: products
                           }))}/>
        </section>
    );
};

export default ChangeCountItems;
