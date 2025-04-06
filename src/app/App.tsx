import './App.css';
import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router'
import {Login} from "../ui/views/Login"
import Home from "../ui/views/Home"
import CreateInvoice from "../ui/views/CreateInvoice"
import SearchInvoice from "../ui/views/SearchInvoice"
import CustomerManagement from "../ui/views/CustomerManagement"
import ProductManagement from "../ui/views/ProductManagement"
import {Header} from "../ui/header/Header"
import {invoke} from "@tauri-apps/api/core";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('jwt')
            if (!token) {
                setLoading(false)
                return
            }

            try {
                const result: { token: string } = await invoke('refresh', { token })
                localStorage.setItem('jwt', result.token)
                setLoggedIn(true)
            } catch {
                localStorage.removeItem('jwt')
            }

            setLoading(false)
        }

        checkToken()
    }, [])

    if (loading) return <div>Cargando...</div>

    return (
        <section className="APP">
            {loggedIn && <Header className="header_view" />}
            <div className="pages_view">
                <Routes>
                    {!loggedIn ? (
                        <Route path="*" element={<Login onLogin={() => setLoggedIn(true)} />} />
                    ) : (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/creacion-factura" element={<CreateInvoice />} />
                            <Route path="/buscar-factura" element={<SearchInvoice />} />
                            <Route path="/gestion-clientes" element={<CustomerManagement />} />
                            <Route path="/gestion-productos" element={<ProductManagement />} />
                            <Route path="/login" element={<Home />} />
                        </>
                    )}
                </Routes>
            </div>
        </section>
    )
}


export default App
