import './InvoiceSearch.css'
import {FilterList} from "../filterList/FilterList.tsx";


export const InvoiceSearch = ({className}:{className:string}) =>{

    const onClick = () =>
    {
        console.log("algo")
    }


    return(
        <section className={`${className} invoiceSearch`}>
            <h2> <b> Búsqueda de Facturas.</b></h2>
            <FilterList parentMethod={onClick}/>
            {/*Aquí iria cada filtro que agrega*/}
            <button> Buscar</button>
        </section>
    )
}