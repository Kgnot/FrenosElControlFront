import './NavContainer.css';
import {ButtonView} from "../button_view/ButtonView.tsx";
import {Link, useLocation} from "react-router";
import { Home, FileText, Search, Users, Package, X } from 'lucide-react';

export const NavContainer = ({ className, isCollapsed }: { className: string, isCollapsed?: boolean }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { path: "/", name: "Inicio", icon: Home },
        { path: "/creacion-factura", name: "Crear Factura", icon: FileText },
        { path: "/buscar-factura", name: "Buscar Factura", icon: Search },
        { path: "/gestion-clientes", name: "Clientes", icon: Users },
        { path: "/gestion-productos", name: "Productos", icon: Package }
    ];

    return (
        <div className={`nav ${className} ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="buttons_nav">
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <Link key={item.path} to={item.path} className="nav-link">
                            <ButtonView
                                name={isCollapsed ? undefined : item.name}
                                icon={isCollapsed ? <IconComponent size={20} /> : undefined}
                                className={`nav-button ${isActive(item.path) ? "active" : ""}`}
                                isCollapsed={isCollapsed}
                                title={item.name}
                            />
                        </Link>
                    );
                })}
            </div>
            <div className="nav-footer">
                <button className="close-btn">
                    {isCollapsed ? <X size={16} /> : "Salir"}
                </button>
            </div>
        </div>
    );
};