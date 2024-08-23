import styles from './blockFAQ.module.css';
import CloseSVG from "../../../svg/closeSVG.tsx";
import {useState} from "react";

interface propsFace {
    textQues: string,
    textAnswer: string
}

const BlockFaq = ({textQues, textAnswer}: propsFace) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleBlockClick = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <section onClick={handleBlockClick} className={styles.container}>
            <article className={styles.blockques}>
                <p className={styles.question}>{textQues}</p>
                <div className={`${styles.cross} ${isOpen && styles.rotate}`}>
                    <CloseSVG/>
                </div>
            </article>

            <div className={`${styles.containerAnswer} ${isOpen && styles.open}`}>
                <p className={styles.answer}>{textAnswer}</p>
            </div>
        </section>
    );
};

export default BlockFaq;
