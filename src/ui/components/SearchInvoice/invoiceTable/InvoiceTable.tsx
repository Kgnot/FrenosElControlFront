import {TableComponent} from "../../utils/table/TableComponent.tsx";
import {BlackModal} from "../../utils/modal/BalckModal.tsx";
import {useState} from "react";
import {ModifyModalInvoice} from "../modal/ModifyModalInvoice.tsx";
import {Invoice} from "../../../../entity/Invoice.ts";

// Datos mock que siguen la estructura correcta de Invoice
const mockData: Invoice[] = [
    {
        id: 1,
        dateOrdered: new Date('2025-02-20'),
        total: 150000,
        vehicle: {
            customer: {
                customerId: 1,
                name: 'Juan Pérez',
                identify: '12345678',
                address: 'Calle 123 #45-67',
                phone: '3001234567'
            },
            plate: 'ABC-123',
            description: 'Toyota Corolla 2020 - Sedán color blanco'
        },
        paymentType: {
            paymentType: 'Efectivo'
        },
        customer: {
            customerId: 1,
            name: 'Juan Pérez',
            identify: '12345678',
            address: 'Calle 123 #45-67',
            phone: '3001234567'
        },
        status: 'Pendiente',
        invoiceItems: [
            {
                id: [1, 1],
                price: 50000,
                quantity: 2,
                unitValue: 50000,
                total: 100000,
                item: {
                    id: 1,
                    itemType: 'servicio',
                    code: 'SERV001',
                    description: 'Cambio de aceite'
                }
            },
            {
                id: [1, 2],
                price: 25000,
                quantity: 2,
                unitValue: 25000,
                total: 50000,
                item: {
                    id: 2,
                    itemType: 'producto',
                    code: 'PROD001',
                    description: 'Filtro de aceite'
                }
            }
        ]
    },
    {
        id: 2,
        dateOrdered: new Date('2025-03-15'),
        total: 75000,
        vehicle: {
            customer: {
                customerId: 2,
                name: 'María González',
                identify: '87654321',
                address: 'Carrera 456 #78-90',
                phone: '3007654321'
            },
            plate: 'DEF-456',
            description: 'Honda Civic 2019 - Hatchback color rojo'
        },
        paymentType: {
            paymentType: 'Tarjeta de crédito'
        },
        customer: {
            customerId: 2,
            name: 'María González',
            identify: '87654321',
            address: 'Carrera 456 #78-90',
            phone: '3007654321'
        },
        status: 'Completada',
        invoiceItems: [
            {
                id: [2, 1],
                price: 75000,
                quantity: 1,
                unitValue: 75000,
                total: 75000,
                item: {
                    id: 3,
                    itemType: 'servicio',
                    code: 'SERV002',
                    description: 'Revisión general'
                }
            }
        ]
    },
    {
        id: 3,
        dateOrdered: new Date('2025-04-10'),
        total: 120000,
        vehicle: {
            customer: {
                customerId: 3,
                name: 'Carlos Rodríguez',
                identify: '11223344',
                address: 'Avenida 789 #12-34',
                phone: '3009876543'
            },
            plate: 'GHI-789',
            description: 'Nissan Sentra 2021 - Sedán color azul'
        },
        paymentType: {
            paymentType: 'Transferencia bancaria'
        },
        customer: {
            customerId: 3,
            name: 'Carlos Rodríguez',
            identify: '11223344',
            address: 'Avenida 789 #12-34',
            phone: '3009876543'
        },
        status: 'En proceso',
        invoiceItems: [
            {
                id: [3, 1],
                price: 80000,
                quantity: 1,
                unitValue: 80000,
                total: 80000,
                item: {
                    id: 4,
                    itemType: 'servicio',
                    code: 'SERV003',
                    description: 'Alineación y balanceo'
                }
            },
            {
                id: [3, 2],
                price: 20000,
                quantity: 2,
                unitValue: 20000,
                total: 40000,
                item: {
                    id: 5,
                    itemType: 'producto',
                    code: 'PROD002',
                    description: 'Llanta de repuesto'
                }
            }
        ]
    }
];

export const InvoiceTable = ({className}: { className: string }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

    const closeModal = () => {
        setShowModal(false);
        setSelectedInvoice(null);
    };

    const handleRowClick = (row: Invoice) => {
        setSelectedInvoice(row);
        setShowModal(true);
    };

    // Función para formatear la fecha
    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    // Función para formatear el total como moneda
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const columns = [
        {
            name: 'Id',
            selector: (row: Invoice) => row.id
        },
        {
            name: 'Cliente',
            selector: (row: Invoice) => row.customer.name
        },
        {
            name: 'Identificación',
            selector: (row: Invoice) => row.customer.identify
        },
        {
            name: 'Vehículo',
            selector: (row: Invoice) => row.vehicle.plate
        },
        {
            name: 'Fecha',
            selector: (row: Invoice) => formatDate(row.dateOrdered)
        },
        {
            name: 'Estado',
            selector: (row: Invoice) => row.status
        },
        {
            name: 'Tipo de Pago',
            selector: (row: Invoice) => row.paymentType.paymentType
        },
        {
            name: 'Items',
            selector: (row: Invoice) => row.invoiceItems.length
        },
        {
            name: 'Total',
            selector: (row: Invoice) => formatCurrency(row.total)
        },
    ];

    return (
        <div className={className}>
            <TableComponent
                columns={columns}
                onRowClick={handleRowClick}
                data={mockData}
                selectedRowId={selectedInvoice?.id}
            />

            <BlackModal
                visible={showModal}
                onClose={closeModal}>
                {selectedInvoice && (
                    <ModifyModalInvoice
                        invoice={selectedInvoice}
                    />
                )}
            </BlackModal>
        </div>
    );
};