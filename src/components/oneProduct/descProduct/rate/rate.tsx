import styles from './rate.module.css';
import StarSvg from "../../../svg/starSVG.tsx";


interface PropsFace {
    rating: number | undefined
}

const Rate = ({rating}: PropsFace) => {

    rating = rating === undefined ? 0 : Math.round(rating);

    return (
        <section className={styles.rate}>
            {
                new Array(5).fill(0).map((el, i) => (
                    <div key={i}>
                        <StarSvg color={`${i < rating ? "#F14F4F" : "#D5D5D5"}`}/>
                    </div>

                ))
            }
        </section>
    );
};

export default Rate;
