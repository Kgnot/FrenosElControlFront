import { useEffect, useState } from "react";
import {Customer} from "../../entity";
import {fetchClientesByNameAPI} from "../../function";



export const useCustomersByName = (name: string|null) => {
    const [cliente, setCliente] = useState<Customer>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClientes = async () => {
            if (!name) {  // Si el nombre es null, limpia el cliente
                setCliente(undefined);
                return;
            }

            setLoading(true);
            try {
                const response = await fetchClientesByNameAPI(name);
                setCliente(response);
            } catch (err) {
                setError(`Error al obtener clientes: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, [name]);

    return { cliente, loading, error };
};
