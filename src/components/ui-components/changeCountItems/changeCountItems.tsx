import styles from './changeCountItems.module.css';
import DefaultButton from "../button/defaultButton.tsx";
import MinusSvg from "../../svg/minusSVG.tsx";
import PlusSvg from "../../svg/plusSVG.tsx";
import {putUserCart} from "../../../redux/slices/cartsSlice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store.ts";
import {ProductCart} from "../../../types/type.ts";
import {useState} from "react";

interface propsFace {
    items: number,
    id?: number,
    products: ProductCart[],
    stock?: number
}

const ChangeCountItems = ({id, products, items, stock = 100}: propsFace) => {

    const dispatch = useDispatch<AppDispatch>();

    const [isLoading, setIsLoading] = useState(false);

    const handleClickPlus = async () => {
        setIsLoading(true);
        try {
            await dispatch(putUserCart({
                idProduct: id,
                quantity: items + 1,
                products: products
            }));
        } finally {
            setIsLoading(false);
        }
    };

    const handleClickMunis = async () => {
        setIsLoading(true);
        try {
            await dispatch(putUserCart({
                idProduct: id,
                quantity: items - 1,
                products: products
            }));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={styles.blockCountItems}>
            <div aria-label={"reduce count"}>
                <DefaultButton svg={<MinusSvg/>} disabled={isLoading}
                               onClick={handleClickMunis}/>
            </div>

            <div className={styles.containerCount}>
                <p className={styles.countItems}>{items}
                    {
                        items > 1 ? " items" : <>&nbsp;item&nbsp;&nbsp;</>
                    }
                </p>
            </div>
            <div aria-label={"increase count"}>
                <DefaultButton svg={<PlusSvg/>}
                               disabled={stock === items || isLoading}
                               onClick={handleClickPlus}
                />
            </div>
        </section>
    );
};

export default ChangeCountItems;
