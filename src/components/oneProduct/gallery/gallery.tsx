import styles from './gallery.module.css';
import product from "../../../assets/images/oneProduct.png";

const Gallery = () => {
    return (
        <section className={styles.blockImg}>
            <figure>
                <img className={styles.mainPhoto} src={product} alt="mainPhoto"/>
            </figure>
            <article className={styles.galleryPhoto}>
                {
                    new Array(6).fill(0).map((el, i) => (
                        <div key={i}>
                            <img src={product} alt={`productImg`}
                                 className={`${styles.smallPhoto} ${i === 0 ? styles.activePhoto : null}`}/>
                        </div>

                    ))
                }
            </article>
        </section>
    );
};

export default Gallery;
