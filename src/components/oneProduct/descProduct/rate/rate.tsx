import styles from './rate.module.css';
import StarSvg from "../../../svg/starSVG.tsx";


interface PropsFace {
    rating: number
}

const Rate = ({rating}: PropsFace) => {

    return (
        <section className={styles.rate}>
            {
                new Array(5).fill(0).map((_, i) => (
                    <div key={i} aria-label={"star rate"}>
                        <StarSvg color={i < Math.round(rating) ? "#F14F4F" : "#D5D5D5"}/>
                    </div>
                ))
            }
        </section>
    );
};

export default Rate;
