
import './ButtonView.css';
import { ReactNode } from 'react';

interface ButtonViewProps {
    name?: string;
    icon?: ReactNode;
    className?: string;
    title?:string;
    isCollapsed?: boolean;
}

export const ButtonView = ({ name, icon, className, isCollapsed,title }: ButtonViewProps) => {
    return (
        <button className={`button_view ${className || ''} ${isCollapsed ? 'collapsed' : ''}`}
        title={title}
        >
            {icon || name}
        </button>
    );
};