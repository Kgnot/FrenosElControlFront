import {ProductItem} from "../productItem/ProductItem.tsx";
import './ProductPlacement.css'
import {useState} from "react";
import {useProductByDescription} from "../../../../hooks/useProduct/useProductByDescription.ts";
import {Product} from "../../../../entity";
import {BlackScreenModal} from "../../modal/BlackScreenModal.tsx";
import {ProductModal} from "../../modal/product/ProductModal.tsx";

interface ProductsPlacementProps
{
    className:string;
    products:Product[]
}


export const ProductsPlacement = ({className,products}:ProductsPlacementProps) => {
    const [description, setDescription] = useState<string | null>(null);
    const {product, loading: productLoading, error: productError} = useProductByDescription(description);

    const handleModalView = (p: Product) => {
        setDescription(p.description);  // Dispara el fetch
        console.log("producto: ",p)
    };
    const quitModal = () => {
        setDescription(null)
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