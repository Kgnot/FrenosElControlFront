import  { useState } from "react";
import {ButtonType1,ButtonType2} from "../components/utils/buttons";
import {CustomerTable} from "../components/CustomerManagement/CustomerTable/CustomerTable.tsx";
import './styles/CustomerManagement.css'
import {BlackModal} from "../components/utils/modal/BalckModal.tsx";
import {CustomerForm} from "../components/CustomerManagement/CustomerFormComponent/CustomerForm.tsx";

export interface Customer {
    customerId: number;
    name: string;
    identify: string;
    address: string;
    phone: string;
}

export default function CustomerManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddCustomer = () => {
        setModalMode('add');
        setSelectedCustomer(null);
        setIsModalOpen(true);
    };

    const handleEditCustomer = (customer: Customer) => {
        setModalMode('edit');
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCustomer(null);
    };

    const handleSaveCustomer = (customerData: Omit<Customer, 'customerId'>) => {
        if (modalMode === 'add') {
            // Lógica para añadir cliente
            console.log('Añadiendo cliente:', customerData);
            // Aquí llamarías a tu API para crear el cliente
        } else {
            // Lógica para modificar cliente
            console.log('Modificando cliente:', { ...customerData, customerId: selectedCustomer?.customerId });
            // Aquí llamarías a tu API para actualizar el cliente
        }
        handleCloseModal();
    };

    return (
        <>
            <section className={"CUSTOMER_PAGE PAGE"}>
                <h3>Gestión clientes</h3>
                <div className={"CUSTOMER_PAGE_SEARCH_DIV"}>
                    <input
                        type="text"
                        placeholder={"Buscar Clientes"}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div>
                        <ButtonType1 parentMethod={handleAddCustomer}>
                            Añadir Cliente
                        </ButtonType1>
                        <ButtonType2 parentMethod={() => selectedCustomer && handleEditCustomer(selectedCustomer)}>
                            Modificar Cliente
                        </ButtonType2>
                    </div>
                </div>

                <CustomerTable
                    className={""}
                    onCustomerSelect={setSelectedCustomer}
                    searchTerm={searchTerm}
                />

                <BlackModal visible={isModalOpen} onClose={handleCloseModal}>
                    <CustomerForm
                        mode={modalMode}
                        customer={selectedCustomer}
                        onSave={handleSaveCustomer}
                        onCancel={handleCloseModal}
                    />
                </BlackModal>
            </section>
        </>
    );
}