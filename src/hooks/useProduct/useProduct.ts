import {useEffect, useState} from "react";
import {Product} from "../../entity";
import {productAPI} from "../../function";

export const useProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClientes = async () => {
            setLoading(true);
            try {
                const response = await productAPI();
                setProducts(response);
            } catch (err) {
                setError(`Error al obtener clientes: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, []);

    return { products, loading, error };
};

