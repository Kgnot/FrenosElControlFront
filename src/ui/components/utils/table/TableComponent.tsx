import DataTable from 'react-data-table-component';


interface TableComponentProps {
    className?: string;
    columns:object[];
    data:object[];
}

export const TableComponent = ({className,columns,data}:TableComponentProps) => {

    return(
        <>
            <DataTable
                className={className}
                columns={columns}
                data={data}
            />
        </>
    )
}