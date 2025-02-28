import DataTable from 'react-data-table-component';


interface TableComponentProps {
    className?: string;
    columns:object[];
    data:object[];
    onRowsSelected?: (selectedRows: object[]) => void;  // Función para devolver las filas seleccionadas
}

export const TableComponent = ({className,columns,data,onRowsSelected}:TableComponentProps) => {

    return(
        <>
            <DataTable
                className={className}
                columns={columns}
                data={data}
                pagination
                paginationPerPage={15}
                paginationRowsPerPageOptions={[15, 15, 15]}
                selectableRows  // Activa selección de filas
                onSelectedRowsChange={({ selectedRows }) => {
                    if (onRowsSelected) {
                        onRowsSelected(selectedRows);
                    }
                }}
            />
        </>
    )
}