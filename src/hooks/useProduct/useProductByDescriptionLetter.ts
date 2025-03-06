import {useEffect, useState} from "react";
import {Product} from "../../entity";
import { fetchProductsByDescLetterAPI} from "../../function";

export const useProductByDescriptionLetter = (letters:string|null)=>
{
    const[products,setProducts] = useState<Product[]|null>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchClientes = async () => {
            if (!letters) {  // Si el nombre es null, limpia el cliente
                setProducts(undefined);
                return;
            }

            setLoading(true);
            try {
                const response = await fetchProductsByDescLetterAPI(letters);
                setProducts(response);
            } catch (err) {
                setError(`Error al obtener clientes: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();

    }, [letters]);
    return { products, loading, error };
}