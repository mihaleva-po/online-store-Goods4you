import styles from './oneProduct.module.css';
import Gallery from "./gallery/gallery.tsx";
import DescProduct from "./descProduct/descProduct.tsx";


const OneProduct = () => {
    return (
        <section className={styles.oneProduct}>
            <div className={styles.container}>
                <Gallery/>
                <DescProduct/>
            </div>
        </section>
    );
};

export default OneProduct;
