import './App.css'
import {Header} from "../ui/header/Header.tsx";
import {Route, Routes} from "react-router";
import Home from "../ui/views/Home.tsx";
import CreateInvoice from "../ui/views/CreateInvoice.tsx";
import SearchInvoice from "../ui/views/SearchInvoice.tsx";
import CustomerManagement from "../ui/views/CustomerManagement.tsx";
import ProductManagement from "../ui/views/ProductManagement.tsx";
// import {useEffect} from "react";
// import {invoke} from "@tauri-apps/api/core";

function App() {
// TODO: Quite el jar al inicio, toca mirar si colocarlo, es nomas de prueba para saber si el tauri hace los request
//     useEffect(() => {
//         const ejecutarJar = async () => {
//             try {
//                 const result = await invoke<string>("ejecutar_jar");
//                 console.log("Jar ejecutado:", result);
//             } catch (error) {
//                 console.error("Error al ejecutar el jar:", error);
//             }
//         };
//
//         ejecutarJar();
//     }, []);

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
