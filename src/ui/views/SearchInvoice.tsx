import {InvoiceSearch} from "../components/SearchInvoice/invoiceSearch/InvoiceSearch.tsx";
import './styles/SearchInvoice.css'
import {InvoiceTable} from "../components/SearchInvoice/invoiceTable/InvoiceTable.tsx";

export default function SearchInvoice() {
    return (

        <section className={"SEARCHINVOICE_PAGE PAGE"}>
            <InvoiceSearch className={"search_and_filters "}/>
            <InvoiceTable className={"table_invoice_searched hijo"}/>
        </section>

    )
}