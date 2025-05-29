import { useState } from "react";
import { Customer } from "../../../../entity";
import './CustomerModal.css';
import { ReactNode } from "react";
import { ButtonType3,ButtonType2 } from "../../utils/buttons";

interface CustomerModalProps {
    className?: string;
    customer: Customer;
    parentMethod?: () => void;
    children?: ReactNode;
    onModify: (customer: Customer) => void;
}

export const ModifyCustomerModal = ({
                                  className,
                                  customer,
                                  parentMethod,
                                  children,
                                  onModify
                              }: CustomerModalProps) => {

    const [editedCustomer, setEditedCustomer] = useState<Customer>({ ...customer });

    const handleChange = (field: keyof Customer, value: string) => {
        setEditedCustomer(prev => ({ ...prev, [field]: value }));
    };

    const handleModify = () => {
        onModify(editedCustomer);
        if (parentMethod) parentMethod(); // cerrar modal
    };

    return (
        <div className={`customerModal ${className}`}>
            {children}
            <div className="customerModal__header">Detalle del Cliente</div>
            <div className="customerModal__form">
                <label className="customerModal__label">Nombre:</label>
                <input
                    value={editedCustomer.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Nombre"
                />

                <label className="customerModal__label">Cédula:</label>
                <input
                    value={editedCustomer.identify}
                    onChange={(e) => handleChange("identify", e.target.value)}
                    placeholder="Cédula"
                />

                <label className="customerModal__label">Dirección:</label>
                <input
                    value={editedCustomer.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Dirección"
                />

                <label className="customerModal__label">Teléfono:</label>
                <input
                    value={editedCustomer.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Teléfono"
                />
            </div>

            <div className="customerModal__footer">
                <ButtonType3 parentMethod={parentMethod}>Cerrar</ButtonType3>
                <ButtonType2 parentMethod={handleModify}>Modificar</ButtonType2>

            </div>
        </div>
    );
};
