import React, { useState, useEffect } from 'react';
import { TableComponent } from '../../utils/table/TableComponent';
import {useCustomer} from "../../../../hooks/customers/useCustomer.ts";
import {Customer} from "../../../../entity";
import {BlackModal} from "../../utils/modal/BalckModal.tsx";
import {CustomerModal} from "../../modal/customer/CustomerModal.tsx";

interface CustomerTableProps {
    className: string;
    onCustomerSelect?: (customer: Customer | null) => void;
    searchTerm?: string;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({
                                                                className,
                                                                onCustomerSelect,
                                                                searchTerm = ''
                                                            }) => {
    const { clientes: data, loading, error } = useCustomer();
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [filteredData, setFilteredData] = useState<Customer[]>([]);

    // Filtrar datos basado en el término de búsqueda
    useEffect(() => {
        if (!data) {
            setFilteredData([]);
            return;
        }

        if (!searchTerm.trim()) {
            setFilteredData(data);
        } else {
            const filtered = data.filter((customer: Customer) =>
                customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.identify.includes(searchTerm) ||
                customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.phone.includes(searchTerm)
            );
            setFilteredData(filtered);
        }
    }, [data, searchTerm]);

    const handleRowClick = (row: Customer) => {
        setSelectedCustomer(row);
        setShowDetailModal(true);

        // Notificar al componente padre sobre la selección
        if (onCustomerSelect) {
            onCustomerSelect(row);
        }
    };

    const handleCloseDetailModal = () => {
        setShowDetailModal(false);
        setSelectedCustomer(null);
    };

    // Configuración de columnas para la tabla
    const columns = [
        {
            name: 'Nombre',
            selector: (row: Customer) => row.name,
            sortable: true,
        },
        {
            name: 'Cédula',
            selector: (row: Customer) => row.identify,
            sortable: true,
        },
        {
            name: 'Dirección',
            selector: (row: Customer) => row.address,
            sortable: true,
        },
        {
            name: 'Teléfono',
            selector: (row: Customer) => row.phone,
            sortable: true,
        },
    ];

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <section className={`${className} customerTable`}>
                <TableComponent
                    columns={columns}
                    data={filteredData.map(customer => ({
                        ...customer,
                        id: customer.customerId // Mapear customerId a id para TableComponent
                    }))}
                    onRowClick={handleRowClick}
                    selectedRowId={selectedCustomer?.customerId}
                />

                {filteredData.length === 0 && searchTerm && (
                    <div className="no-results">
                        <p>No se encontraron clientes que coincidan con "{searchTerm}"</p>
                    </div>
                )}
            </section>

            {/* Modal para mostrar detalles del cliente */}
            {selectedCustomer && (
                <BlackModal visible={showDetailModal} onClose={handleCloseDetailModal}>
                    <CustomerModal
                        className=""
                        customer={selectedCustomer}
                        parentMethod={handleCloseDetailModal}  // detallar aqui
                    />
                </BlackModal>
            )}
        </>
    );
};