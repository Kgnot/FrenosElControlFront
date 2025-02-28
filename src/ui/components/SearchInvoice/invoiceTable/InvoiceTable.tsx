import {TableComponent} from "../../utils/table/TableComponent.tsx";


interface InvoiceTableInsert {
    id: number;
    customer: string;
    date: string;
    total: number;
}

const mockData: InvoiceTableInsert[] = [
    {
        id: 1,
        customer: 'Cliente 1',
        date: '2025-02-20',
        total: 150000
    },
    {
        id: 2,
        customer: 'Cliente 2',
        date: '2025-03-15',
        total: 15000
    },
    {
        id: 3,
        customer: 'Cliente 3',
        date: '2025-04-10',
        total: 35000
    }
];

export const InvoiceTable = ({className}:{className:string}) =>
{
    const columns = [
        {
            name: 'Id',
            selector: (row: InvoiceTableInsert) => row.id
        },
        {
            name: 'Cliente',
            selector: (row: InvoiceTableInsert) => row.customer
        },
        {
            name: 'Fecha',
            selector: (row: InvoiceTableInsert) => row.date
        },
        {
            name: 'Total',
            selector: (row: InvoiceTableInsert) => row.total
        },
    ];
    return(
        <div className={className}>
            <TableComponent columns={columns} data={mockData}/>
        </div>
    )
}