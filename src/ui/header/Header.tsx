
import './Header.css'
import {Slogan} from "./slogan_container/Slogan.tsx";
import {NavContainer} from "./nav_container/NavContainer.tsx";
import { useState } from 'react';

export const Header = ({className}: { className: string }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        console.log('Click detectado! Estado actual:', isCollapsed);
        setIsCollapsed(!isCollapsed);
        console.log('Nuevo estado será:', !isCollapsed);
    };

    return (
        <section className={`header ${className} ${isCollapsed ? 'collapsed' : ''}`}>
            <button
                className="sidebar-toggle"
                onClick={toggleSidebar}
                aria-label={isCollapsed ? 'Expandir menú' : 'Contraer menú'}
                style={{ zIndex: 999 }} // Asegurar que está encima
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    {isCollapsed ? (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    ) : (
                        <path d="M21 6H3M21 12H3M21 18H3" />
                    )}
                </svg>
            </button>

            <div className="header-content">
                <Slogan className={"slogan_header"} isCollapsed={isCollapsed} />
                <NavContainer className={"nav_header"} isCollapsed={isCollapsed} />
            </div>
        </section>
    )
}