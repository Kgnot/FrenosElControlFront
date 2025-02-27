import './NavContainer.css';
import {ButtonView} from "../button_view/ButtonView.tsx";
import {Link} from "react-router";


export const NavContainer = ({className}: { className: string }) => {
    return (
        <div className={`nav ${className}`}>
            <div className="buttons_nav">
                <Link to="/"><ButtonView name={"Inicio"}/></Link>
                <Link to="/creacion-factura"><ButtonView name={"Creación Factura"}/></Link>
                <Link to="/buscar-factura"><ButtonView name={"Buscar Factura"}/></Link>
                <Link to="/gestion-clientes"><ButtonView name={"Gestionar Clientes"}/></Link>
                <Link to="/gestion-productos"><ButtonView name={"Gestionar Productos"}/></Link>
            </div>
            <div>
                <button className="close">Salir</button>
            </div>
        </div>
    );
};