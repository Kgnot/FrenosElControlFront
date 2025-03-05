import {ProductItem} from "../productItem/ProductItem.tsx";
import './ProductPlacement.css'
import {useProduct} from "../../../../hooks/useProduct/useProduct.ts";
import {useState} from "react";
import {useProductByDescription} from "../../../../hooks/useProduct/useProductByDescription.ts";
import {Product} from "../../../../entity";
import {BlackScreenModal} from "../../modal/BlackScreenModal.tsx";
import {ProductModal} from "../../modal/product/ProductModal.tsx";

export const ProductsPlacement = ({className}: { className: string }) => {

    const {products, loading, error} = useProduct();
    const [description, setDescription] = useState<string | null>(null);
    const {product, loading: productLoading, error: productError} = useProductByDescription(description);

    const handleModalView = (p: Product) => {
        setDescription(p.description);  // Dispara el fetch
        console.log("producto: ",p)
    };
    const quitModal = () => {
        setDescription(null)
    }

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
        <>
            {product &&
            <BlackScreenModal>
                <ProductModal
                    product={product}
                    quitModal={quitModal}
                >
                    {productError && <div> Error {productError}</div>}
                    {productLoading && <div> Cargando . . . </div>}
                </ProductModal>
            </BlackScreenModal>
            }
            <section className={`${className} productsPlacement`}>

                {products?.map(item => <ProductItem product={item} handleModal={handleModalView}/>)}


            </section>
        </>

    )
}