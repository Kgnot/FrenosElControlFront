import {ProductItem} from "../productItem/ProductItem.tsx";
import {useFetch} from "../../../../hooks/useFetch.ts";
import {Product} from "../../../../entity";
import './ProductPlacement.css'

export const ProductsPlacement = ({className}: { className: string }) => {
    const {data, loading, error} = useFetch<Product[]>("http://localhost:8080/product/");

    if (error) {
        return (
            <>
                error xd
            </>
        )
    }

    if (loading) {
        return (
            <>
                cargando ...
            </>
        )
    }
    return (
        <section className={`${className} productsPlacement`}>

            {data?.map(item => <ProductItem description={item.description} code={item.code}/>)}


        </section>
    )
}