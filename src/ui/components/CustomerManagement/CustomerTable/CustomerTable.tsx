import './CustomerTable.css'
import {TableComponent} from "../../utils/table/TableComponent.tsx";
import {useFetch} from "../../../../hooks/useFetch.ts";
import {Customer} from "../../../../entity/Customer.ts";

interface CustomerTableInsert {
    name: string
    identify: string
    address: string
    phone: string
}
export const CustomerTable = ({className}: { className: string }) => {
    const {data:muckData,error,loading} = useFetch<Customer[]>("http://localhost:8080/customer/")

    const columns = [
        {name: 'Nombre', selector: (row: CustomerTableInsert) => row.name},
        {name: 'Cédula', selector: (row: CustomerTableInsert) => row.identify},
        {name: 'Dirección', selector: (row: CustomerTableInsert) => row.address},
        {name: 'Teléfono', selector: (row: CustomerTableInsert) => row.phone},
    ];


    if(error)
        return(
            <>
                Error {error}
            </>
        )

    if(loading)
        return(
            <>
                Loading ...
            </>
        )

    return (
        <section className={`${className} customerTable`}>
            <TableComponent columns={columns} data={muckData?? []}/>
        </section>
    )
}

