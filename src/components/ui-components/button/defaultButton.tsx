import styles from './defaultButton.module.css';
import {ReactNode} from "react";


export interface propsFace {
    text?: string,
    svg?: ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    disabled?: boolean,
    onClick?: () => void
}

const DefaultButton = ({text, svg, type = "button", disabled, onClick}: propsFace) => {
    return (
        <button type={type} disabled={disabled} className={`${styles.button} ${svg ? styles.svg : styles.text}`}
                onClick={onClick}>
            {text}
            {svg}
        </button>
    );
};

export default DefaultButton;
