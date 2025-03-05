import DataTable from 'react-data-table-component';


interface TableComponentProps<T> {
    className?: string;
    columns:object[];
    data:T[];
    onRowsSelected?: (selectedRows: object[]) => void;
    onRowClick?: (row: T) => void;
}

export const TableComponent= <T,> ({className,columns,data,onRowClick}:TableComponentProps<T>) => {

    return(
        <>
            <DataTable
                className={className}
                columns={columns}
                data={data}
                pagination
                paginationPerPage={15}
                paginationRowsPerPageOptions={[15, 15, 15]}
                onRowClicked={(row)=>{
                    if(onRowClick){
                        onRowClick(row);
                    }
                } }
            />
        </>
    )
}