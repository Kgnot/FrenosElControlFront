import './TransactionTable.css';
import { TableComponent } from "../../utils/table/TableComponent.tsx";
import { Activity, TrendingUp } from 'lucide-react';

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
    { id: 3, name: 'Carlos Gómez', date: '2025-02-25', value: 870, items: 'Líquido de frenos' },
    { id: 4, name: 'Ana Silva', date: '2025-02-24', value: 1200, items: 'Discos de freno' },
    { id: 5, name: 'Luis Martín', date: '2025-02-23', value: 950, items: 'Revisión general' }
];

export const TransactionTable = () => {
    const columns = [
        {
            name: 'Cliente',
            selector: (row: Transaction) => row.name
        },
        {
            name: 'Fecha',
            selector: (row: Transaction) => new Date(row.date).toLocaleDateString('es-CO')
        },
        {
            name: 'Valor',
            selector: (row: Transaction) => `$${row.value.toLocaleString('es-CO')}`
        },
        {
            name: 'Servicios',
            selector: (row: Transaction) => row.items
        }
    ];

    const totalValue = mockData.reduce((sum, transaction) => sum + transaction.value, 0);

    return (
        <div className="transaction-table-container">
            <div className="table-header">
                <div className="table-title">
                    <Activity size={24} />
                    <h3>Últimas Transacciones</h3>
                </div>
                <div className="table-summary">
                    <div className="summary-item">
                        <TrendingUp size={16} />
                        <span>Total: ${totalValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
            </div>
            <div className="table-content">
                <TableComponent columns={columns} data={mockData} />
            </div>
        </div>
    );
};