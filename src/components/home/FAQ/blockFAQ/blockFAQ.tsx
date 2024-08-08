import styles from './blockFAQ.module.css';
import CloseSVG from "../../../svg/closeSVG.tsx";

interface propsFace {
    isOpen: boolean,
    textQues: string,
    textAnswer: string
}

const BlockFaq = ({isOpen, textQues, textAnswer}: propsFace) => {
    return (
        <section className={styles.container}>
            <div className={styles.blockques}>
                <p className={styles.question}>{textQues}</p>
                <CloseSVG/>
            </div>

            {
                isOpen && <p className={styles.answer}>{textAnswer}</p>
            }


        </section>
    );
};

export default BlockFaq;
