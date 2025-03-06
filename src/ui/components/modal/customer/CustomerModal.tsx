import {Customer} from "../../../../entity";
import './CustomerModal.css'
import {ReactNode} from "react";
import {ButtonType3} from "../../utils/buttons/ButtonType3.tsx";
import {ButtonType2} from "../../utils/buttons/ButtonType2.tsx";

interface CustomerModalProps {
    className?: string;
    customer: Customer;
    parentMethod?: () => void;
    children?: ReactNode;
    onModify?:()=>void
}

export const CustomerModal = ({ className, customer, parentMethod, children,onModify }: CustomerModalProps) => {
    return (
        <div className={`customerModal ${className}`}>
            {children}
            <div className="customerModal__header">Detalle del Cliente</div>
            <div className="customerModal__form">
                <label className="customerModal__label">Nombre:</label>
                <input defaultValue={customer.name} placeholder="Nombre"/>

                <label className="customerModal__label">Cédula:</label>
                <input defaultValue={customer.identify} placeholder="Cédula"/>

                <label className="customerModal__label">Dirección:</label>
                <input defaultValue={customer.address} placeholder="Dirección"/>

                <label className="customerModal__label">Teléfono:</label>
                <input defaultValue={customer.phone} placeholder="Teléfono"/>
            </div>

            <div className="customerModal__footer">
                <ButtonType2 parentMethod={onModify}>Modificar</ButtonType2>
                <ButtonType3 parentMethod={parentMethod}>Cerrar</ButtonType3>
            </div>
        </div>
    );
}