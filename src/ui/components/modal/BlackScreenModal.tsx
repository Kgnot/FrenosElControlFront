import {ReactNode} from "react";
import './BlackScreenModal.css'

export const BlackScreenModal = ({children}:{children:ReactNode}) =>
{
    return(
        <div className="blackScreenModal">
            {children}
        </div>
    )
}