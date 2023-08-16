import React from 'react';
import styles from "./page.module.css"


interface ButtonProps {
    type?: 'button' | 'Submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?:React.ReactNode;
    OnClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button : React.FC<ButtonProps>= ({type, fullWidth, children, secondary, danger, disabled, OnClick}) => {
    return (
        <div>
            <button onClick={OnClick} type={type} disabled={disabled}  className={styles.btn, disabled && "opacity-50 cursor-default"} secondary >Submit</button>
        </div>
    )
}


export default Button;