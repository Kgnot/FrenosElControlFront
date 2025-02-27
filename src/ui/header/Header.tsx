import './Header.css'
import {Slogan} from "./slogan_container/Slogan.tsx";
import {NavContainer} from "./nav_container/NavContainer.tsx";

export const Header = ({className}: { className: string }) => {


    return (
        <section className={`header ${className}`}>
            <Slogan className={"slogan_header"}/>
            <NavContainer className={"nav_header"}/>
        </section>
    )
}