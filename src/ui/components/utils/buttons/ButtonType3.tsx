import './styles/ButtonType.css'
import {ReactNode} from "react";

interface ButtonType
{
    className?:string;
    parentMethod?:()=>void
    children:ReactNode
}

export const ButtonType3 = ({className,parentMethod,children}:ButtonType) =>
{
    return(
        <button className={`${className} buttonType3`} onClick={parentMethod}>{children}</button>
    )
}