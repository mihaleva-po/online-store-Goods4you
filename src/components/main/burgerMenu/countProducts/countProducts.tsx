import styles from './countProducts.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../redux/store.ts";
import {useEffect} from "react";
import {fetchUserCart} from "../../../../redux/slices/cartsSlice.ts";


const CountProducts = () => {

    const dispatch = useDispatch<AppDispatch>();
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    useEffect(() => {
        dispatch(fetchUserCart(6));
        // console.log(totalQuantity);
    }, [dispatch]);

    return (
        <section>
            {
                totalQuantity > 0 ?
                <div className={styles.circle}>
                    <p>{totalQuantity}</p>
                </div>
                    : null
            }

        </section>

    );
};

export default CountProducts;
