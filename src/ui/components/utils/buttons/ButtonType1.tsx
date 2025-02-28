import './styles/ButtonType.css'
import {ReactNode} from "react";

interface ButtonType
{
    className?:string;
    parentMethod?:()=>void
    children:ReactNode
}

export const ButtonType1 = ({className,parentMethod,children}:ButtonType) =>
{
    return(
        <button className={`${className} buttonType1`} onClick={parentMethod}>{children}</button>
    )
}