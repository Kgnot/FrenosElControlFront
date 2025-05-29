import './App.css';
import {Route, Routes} from 'react-router'
import Home from "../ui/views/Home"
import CreateInvoice from "../ui/views/CreateInvoice"
import SearchInvoice from "../ui/views/SearchInvoice"
import CustomerManagement from "../ui/views/CustomerManagement"
import ProductManagement from "../ui/views/ProductManagement"
import {Header} from "../ui/header/Header.tsx"

function App() {
    return (
        <section className="APP">
            <Header className="header_view"/>
            <div className="pages_view">
                <Routes>
                    <>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/creacion-factura" element={<CreateInvoice/>}/>
                        <Route path="/buscar-factura" element={<SearchInvoice/>}/>
                        <Route path="/gestion-clientes" element={<CustomerManagement/>}/>
                        <Route path="/gestion-productos" element={<ProductManagement/>}/>
                        <Route path="/login" element={<Home/>}/>
                    </>

                </Routes>
            </div>
        </section>
    )
}


export default App
