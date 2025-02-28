import './NavContainer.css';
import {ButtonView} from "../button_view/ButtonView.tsx";
import {Link, useLocation} from "react-router";

export const NavContainer = ({ className }: { className: string }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className={`nav ${className}`}>
            <div className="buttons_nav">
                <Link to="/">
                    <ButtonView
                        name={"Inicio"}
                        className={isActive("/") ? "active" : ""}
                    />
                </Link>
                <Link to="/creacion-factura">
                    <ButtonView
                        name={"Creación Factura"}
                        className={isActive("/creacion-factura") ? "active" : ""}
                    />
                </Link>
                <Link to="/buscar-factura">
                    <ButtonView
                        name={"Buscar Factura"}
                        className={isActive("/buscar-factura") ? "active" : ""}
                    />
                </Link>
                <Link to="/gestion-clientes">
                    <ButtonView
                        name={"Gestionar Clientes"}
                        className={isActive("/gestion-clientes") ? "active" : ""}
                    />
                </Link>
                <Link to="/gestion-productos">
                    <ButtonView
                        name={"Gestionar Productos"}
                        className={isActive("/gestion-productos") ? "active" : ""}
                    />
                </Link>
            </div>
            <div>
                <button className="close">Salir</button>
            </div>
        </div>
    );
};
