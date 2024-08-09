import styles from './rate.module.css';
import StarSvg from "../../../svg/starSVG.tsx";

const Rate = () => {
    return (
        <section className={styles.rate}>
            {
                new Array(5).fill(0).map((el, i) => (
                    <div key={i}>
                        <StarSvg color={`${i===4 ? "#D5D5D5" : "#F14F4F"}`}/>
                    </div>

                ))
            }
        </section>
    );
};

export default Rate;
