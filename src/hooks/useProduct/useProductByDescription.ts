import {Product} from "../../entity";
import {useEffect, useState} from "react";
import {fetchItemByDescriptionAPI} from "../../function";


export const useProductByDescription = (description:string|null)=>
{
    const[product,setProduct] = useState<Product|null>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchClientes = async () => {
            if (!description) {  // Si el nombre es null, limpia el cliente
                setProduct(undefined);
                return;
            }

            setLoading(true);
            try {
                const response = await fetchItemByDescriptionAPI(description);
                setProduct(response);
            } catch (err) {
                setError(`Error al obtener clientes: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();

    }, [description]);
    return { product, loading, error };
}