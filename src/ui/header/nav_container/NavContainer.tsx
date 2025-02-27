import './NavContainer.css';
import {ButtonView} from "../button_view/ButtonView.tsx";

export const NavContainer = ({className}:{className:string}) => {


    return(
        <>
            <div className={`nav ${className}`}>
                <div className={"buttons_nav"}>
                    <ButtonView name={"Inicio"}/>
                    <ButtonView name={"Creación Factura"}/>
                    <ButtonView name={"Buscar Factura"}/>
                    <ButtonView name={"Gestión Clientes"}/>
                    <ButtonView name={"Gestión Productos"}/>
                </div>
                <div>
                    <button className={"close"}> Salir </button>
                </div>
            </div>
        </>
    )
}