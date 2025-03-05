import { useEffect, useState } from "react";
import {Customer} from "../../entity";
import {fetchClientesAPI} from "../../function";


export const useCustomer = () => {
    const [clientes, setClientes] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClientes = async () => {
            setLoading(true);
            try {
                const response = await fetchClientesAPI();
                setClientes(response);
            } catch (err) {
                setError(`Error al obtener clientes: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, []);

    return { clientes, loading, error };
};


