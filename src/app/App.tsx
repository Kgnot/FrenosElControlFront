import './App.css'
import {Header} from "../ui/header/Header.tsx";
import {Route, Routes} from "react-router";
import Home from "../ui/views/Home.tsx";
import CreateInvoice from "../ui/views/CreateInvoice.tsx";
import SearchInvoice from "../ui/views/SearchInvoice.tsx";
import CustomerManagement from "../ui/views/CustomerManagement.tsx";
import ProductManagement from "../ui/views/ProductManagement.tsx";

function App() {

    return (
        <section className="APP">
            <Header className={"header_view"}/>
            <div className={"pages_view"}>

                {/* Aquí van las rutas */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/creacion-factura" element={<CreateInvoice/>}/>
                    <Route path="/buscar-factura" element={<SearchInvoice/>}/>
                    <Route path="/gestion-clientes" element={<CustomerManagement/>}/>
                    <Route path="/gestion-productos" element={<ProductManagement/>}/>
                </Routes>
            </div>
        </section>
    )
}

export default App
