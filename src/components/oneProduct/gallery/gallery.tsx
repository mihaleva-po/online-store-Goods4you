import styles from './gallery.module.css';
import {useState} from "react";


interface PropsFace {
    images: [string]
}

const Gallery = ({images}: PropsFace) => {

    const [activePhoto, setActivePhoto] = useState(images[0]);
    const [numberPhoto, setNumberPhoto] = useState(0);

    const handleClickPhoto = (numberImg: number) => {
        setNumberPhoto(numberImg);
        setActivePhoto(images[numberImg]);
    }

    return (
        <section className={styles.blockImg}>
            <img className={styles.mainPhoto} src={activePhoto} alt="main Photo"/>
            <article className={styles.galleryPhoto}>
                {
                    images.length > 1 &&
                    images?.map((img, i) => (
                        <div onClick={() => handleClickPhoto(i)} key={i}>
                            <img src={img} alt={`Product Image`}
                                 className={`${styles.smallPhoto} ${i === numberPhoto ? styles.activePhoto : null}`}/>
                        </div>
                    ))
                }
            </article>
        </section>
    );
};

export default Gallery;
