import {ButtonType1} from "../components/utils/buttons/ButtonType1.tsx";
import {ButtonType2} from "../components/utils/buttons/ButtonType2.tsx";
import {CustomerTable} from "../components/CustomerManagement/CustomerTable/CustomerTable.tsx";
import './styles/CustomerManagement.css'

export default function CustomerManagement() {
    return (
        <>
            <section className={"CUSTOMER_PAGE PAGE"}>
                <h3> Gestión clientes</h3>
                <div className={"CUSTOMER_PAGE_SEARCH_DIV"}>
                    <input type="text" placeholder={"Buscar Clientes"}/>
                    <div>
                        <ButtonType1> Añadir Cliente </ButtonType1>
                        <ButtonType2> Modificar Cliente </ButtonType2>
                    </div>
                </div>
                <CustomerTable className={""}/>
            </section>
        </>
    )
}