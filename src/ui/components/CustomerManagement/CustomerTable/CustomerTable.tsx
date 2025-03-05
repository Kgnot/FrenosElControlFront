import './CustomerTable.css'
import {TableComponent} from "../../utils/table/TableComponent.tsx";
import {useCustomer} from "../../../../hooks/customers/useCustomer.ts";
import {useCustomersByName} from "../../../../hooks/customers/useCustomerByName.ts";
import {useState} from "react";
import {CustomerModal} from "../../modal/customer/CustomerModal.tsx";
import {BlackScreenModal} from "../../modal/BlackScreenModal.tsx";

interface CustomerTableInsert {
    name: string
    identify: string
    address: string
    phone: string
}

export const CustomerTable = ({className}: { className: string }) => {
    const {clientes: data, loading, error} = useCustomer();
    const [name, setName] = useState<string | null>(null);
    const {cliente, loading: loadingCliente, error: errorCliente} = useCustomersByName(name);

    const handleRowClick = (row: CustomerTableInsert) => {
        setName(row.name);  // Dispara el fetch
    };
    const quitModal = () => {
        setName(null)
    }

    const columns = [
        {name: 'Nombre', selector: (row: CustomerTableInsert) => row.name},
        {name: 'Cédula', selector: (row: CustomerTableInsert) => row.identify},
        {name: 'Dirección', selector: (row: CustomerTableInsert) => row.address},
        {name: 'Teléfono', selector: (row: CustomerTableInsert) => row.phone},
    ];

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            {cliente && (
                <BlackScreenModal>
                    <CustomerModal
                        className=""
                        customer={cliente}
                        parentMethod={quitModal}
                    >
                        {loadingCliente && <p>Buscando cliente...</p>}
                        {errorCliente && <p>{errorCliente}</p>}
                    </CustomerModal>
                </BlackScreenModal>

            )}
            <section className={`${className} customerTable`}>
                <TableComponent
                    columns={columns}
                    data={data ?? []}
                    onRowClick={handleRowClick}
                />
            </section>
        </>
    );
};

