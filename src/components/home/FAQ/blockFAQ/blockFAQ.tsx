import styles from './blockFAQ.module.css';
import CloseSVG from "../../../svg/closeSVG.tsx";
import {useState} from "react";

interface propsFace {
    // isOpen: boolean,
    textQues: string,
    textAnswer: string
}

const BlockFaq = ({textQues, textAnswer}: propsFace) => {

    const [isOpen, setIsOpen] = useState(false);

    const [isRotated, setIsRotated] = useState(false);


    const handleBlockClick = () => {
        setIsRotated((prevIsRotated) => !prevIsRotated);
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <section onClick={handleBlockClick} className={styles.container}>
            <article className={styles.blockques}>
                <p className={styles.question}>{textQues}</p>
                <div className={`${styles.block} ${isRotated ? styles.rotated : ''}`}>
                    <CloseSVG/>
                </div>

            </article>

            <div className={`${styles.containerAnswer} ${isOpen ? styles.visible : styles.hidden}`}>
                <p className={`${styles.answer} ${isOpen ? styles.visible : styles.hidden}`}>{textAnswer}</p>
            </div>



        </section>
    );
};

export default BlockFaq;
