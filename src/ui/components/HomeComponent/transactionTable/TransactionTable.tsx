import './TransactionTable.css'
import {TableComponent} from "../../utils/table/TableComponent.tsx";


interface Transaction {
    id: number;
    name: string;
    date: string;
    value: number;
    items: string;
}

const mockData: Transaction[] = [
    { id: 1, name: 'Juan Pérez', date: '2025-02-27', value: 1500, items: 'Frenos, Aceite' },
    { id: 2, name: 'María López', date: '2025-02-26', value: 2300, items: 'Pastillas de freno' },
    { id: 3, name: 'Carlos Gómez', date: '2025-02-25', value: 870, items: 'Líquido de frenos' }
];

export const TransactionTable = ({className}: { className: string }) => {

    const columns = [
        {
            name: 'Persona',
            selector: (row: Transaction) => row.name
        },
        {
            name: 'Fecha',
            selector: (row: Transaction) => row.date
        },
        {
            name: 'Valor',
            selector: (row: Transaction) => `$${row.value}`
        },
        {
            name: 'Items',
            selector: (row: Transaction) => row.items
        }
    ];


    return (
        <section className={`transactionTable ${className}`}>
            <h4> Tabla de últimas transacciones </h4>
            <TableComponent columns={columns} data={mockData}/>
        </section>
    )
}