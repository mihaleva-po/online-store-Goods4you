import styles from './oneProduct.module.css';
import Gallery from "./gallery/gallery.tsx";
import DescProduct from "./descProduct/descProduct.tsx";
import {Helmet} from "react-helmet-async";


const OneProduct = () => {
    return (
        <section className={styles.oneProduct}>
            <Helmet>
                <title>Essence Mascara Lash Princess | Goods4you</title>
            </Helmet>
            <article className={styles.container}>
                <Gallery/>
                <DescProduct/>
            </article>
        </section>
    );
};

export default OneProduct;
