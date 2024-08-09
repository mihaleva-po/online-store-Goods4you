import styles from './gallery.module.css';
import product from "../../../assets/images/oneProduct.png";

const Gallery = () => {
    return (
        <section className={styles.blockImg}>
            <img className={styles.mainPhoto} src={product} alt="mainPhoto"/>
            <div className={styles.galleryPhoto}>
                {
                    new Array(6).fill(0).map((el, i) => (
                        <div key={i}>
                            <img src={product} alt={`photo${el}`}
                                 className={`${styles.smallPhoto} ${i === 0 ? styles.activePhoto : null}`}/>
                        </div>

                    ))
                }
            </div>
        </section>
    );
};

export default Gallery;
