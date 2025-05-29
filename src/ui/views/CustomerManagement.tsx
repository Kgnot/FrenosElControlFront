import {useState} from "react";
import {ButtonType1/*,ButtonType2*/} from "../components/utils/buttons";
import {CustomerTable} from "../components/CustomerManagement/CustomerTable/CustomerTable.tsx";
import './styles/CustomerManagement.css'
import {BlackModal} from "../components/utils/modal/BalckModal.tsx";
import {AddCustomerForm} from "../components/CustomerManagement/CustomerFormComponent/AddCustomerForm.tsx";

export interface Customer {
    customerId: number;
    name: string;
    identify: string;
    address: string;
    phone: string;
}


const customersDataMock: Customer[] = [
    {
        customerId: 1,
        name: '<NAME>',
        identify: '123456789',
        address: 'Calle 123 # 123',
        phone: '123456789'
    }
]


export default function CustomerManagement() {
    const [, forceRender] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddCustomer = () => {
        setSelectedCustomer(null);
        setIsModalOpen(true);
    };

    const handleEditCustomer = (updatedCustomer: Customer) => {
        const index = customersDataMock.findIndex(c => c.customerId === updatedCustomer.customerId);
        if (index !== -1) {
            customersDataMock[index] = updatedCustomer;
            console.log("Cliente modificado con éxito");
            forceRender({}); // Forzar renderizado
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCustomer(null);
    };

    const handleSaveCustomer = (customerData: Customer) => {
        // Guardamos el cliente
        console.log(customerData);
        customersDataMock.push(customerData)
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
                    </div>
                </div>
                {/* Usamos la tabla, posiblemente aqui es mejor pasarle los datos */}
                <CustomerTable
                    modifyCustomerHandler={handleEditCustomer}
                    className={""}
                    customerData={customersDataMock}
                    onCustomerSelect={setSelectedCustomer}
                    searchTerm={searchTerm}
                />

                <BlackModal visible={isModalOpen} onClose={handleCloseModal}>
                    <AddCustomerForm
                        customer={selectedCustomer}
                        onSave={handleSaveCustomer}
                        onCancel={handleCloseModal}
                    />
                </BlackModal>
            </section>
        </>
    );
}