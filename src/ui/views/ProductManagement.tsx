import {HeadProductManagement} from "../components/ProductManagement/headProductManagement/HeadProductManagement.tsx";
import {ProductsPlacement} from "../components/ProductManagement/productsPlacement/ProductsPlacement.tsx";
import './styles/ProductManagement.css'

export default function ProductManagement() {
    return(
        <>
            <section className={"PRODUCT_PAGE PAGE"}>
                <HeadProductManagement className={"PRODUCT_PAGE_izq"}/>
                <ProductsPlacement className={"PRODUCT_PAGE_der"}/>
            </section>
        </>
    )
}