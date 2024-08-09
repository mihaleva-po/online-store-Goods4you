import styles from './oneProduct.module.css';
import Gallery from "./gallery/gallery.tsx";
import DescProduct from "./descProduct/descProduct.tsx";
// import product from '../../assets/images/oneProduct.png';

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
