import {HeadProductManagement} from "../components/ProductManagement/headProductManagement/HeadProductManagement.tsx";
import {ProductsPlacement} from "../components/ProductManagement/productsPlacement/ProductsPlacement.tsx";
import './styles/ProductManagement.css'
import {useProduct} from "../../hooks/useProduct/useProduct.ts";
import {useState} from "react";
import {useItemByDescriptionLetter} from "../../hooks/useProduct/useItemByDescriptionLetter.ts";

export default function ProductManagement() {
    const {products} = useProduct();
    const [letter,setLetter] = useState<string|null>(null);
    const {products:productsSearched} = useItemByDescriptionLetter(letter);

    const handleSearchProduct = (descLet:string) =>
    {
        setLetter(descLet)
        console.log(descLet);

    }

    return(
        <>
            <section className={"PRODUCT_PAGE PAGE"}>
                <HeadProductManagement className={"PRODUCT_PAGE_izq"} searchProduct={handleSearchProduct}/>
                <ProductsPlacement className={"PRODUCT_PAGE_der"} products={productsSearched?productsSearched:products}/>
            </section>
        </>
    )
}