import './Profile.css'
import {UpPerfil} from "./upPerfil/UpPerfil.tsx";


export const Profile = ({className}:{className:string}) => {

    return  (
        <section className={className}>
            <UpPerfil className={"Profile_sup"}/>
        </section>
    )
}