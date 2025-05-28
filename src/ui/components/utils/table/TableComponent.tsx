import DataTable from 'react-data-table-component';
import './TableComponent.css';

interface TableComponentProps<T> {
    className?: string;
    columns: object[];
    data: T[];
    onRowsSelected?: (selectedRows: object[]) => void;
    onRowClick?: (row: T) => void;
    selectedRowId?: number;
}

export const TableComponent = <T extends { id: number }>({
                                                             className,
                                                             columns,
                                                             data,
                                                             onRowClick,
                                                             selectedRowId
                                                         }: TableComponentProps<T>) => {


    const conditionalRowStyles = [
        {
            when: (row: T) => row.id === selectedRowId,
            style: {
                backgroundColor: '#e3f2fd !important',
                borderLeft: '4px solid #22445e',
                fontWeight: '500',
            },
        },
    ];

    return (
        <div className={`table-component-wrapper ${className || ''}`}>
            <DataTable
                className="custom-data-table"
                columns={columns}
                data={data}
                pagination
                paginationPerPage={15}
                paginationRowsPerPageOptions={[15, 15, 15]}
                onRowClicked={(row) => {
                    if (onRowClick) {
                        onRowClick(row);
                    }
                }}
                // customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
};