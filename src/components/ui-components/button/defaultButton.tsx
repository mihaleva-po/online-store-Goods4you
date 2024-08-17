import styles from './defaultButton.module.css';
import {ReactNode} from "react";


export interface propsFace {
    text?: string,
    svg?: ReactNode,
}

const DefaultButton = ({text, svg}: propsFace) => {
    return (
        <button className={`${styles.button} ${svg && styles.svg}`}>
            {text}
            {svg}
        </button>
    );
};

export default DefaultButton;
