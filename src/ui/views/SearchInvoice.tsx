import {InvoiceSearch} from "../components/SearchInvoice/invoiceSearch/InvoiceSearch.tsx";
import './styles/SearchInvoice.css'

export default function SearchInvoice()
{
    return (
        <>
            <section className={"SEARCHINVOICE_PAGE PAGE"}>
                <InvoiceSearch className={"search_and_filters"}/>
                <div className={"table_invoice_searched"}></div>
            </section>
        </>
    )
}