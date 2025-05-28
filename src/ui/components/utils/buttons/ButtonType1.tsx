import './styles/ButtonType.css'
import {ReactNode} from "react";

interface ButtonType {
    className?: string;
    parentMethod?: () => void
    type?: HTMLButtonElement['type']
    children: ReactNode
}

export const ButtonType1 = ({className, parentMethod, children, type}: ButtonType) => {
    return (
        <button
            className={`${className} buttonType1`}
            onClick={parentMethod}
            type={type}

        >{children}</button>
    )
}