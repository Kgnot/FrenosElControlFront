import {HeadProductManagement} from "../components/ProductManagement/headProductManagement/HeadProductManagement.tsx";
import {ProductsPlacement} from "../components/ProductManagement/productsPlacement/ProductsPlacement.tsx";
import './styles/ProductManagement.css'
// import {useProduct} from "../../hooks/useProduct/useProduct.ts";
import {useState} from "react";
// import {useItemByDescriptionLetter} from "../../hooks/useProduct/useItemByDescriptionLetter.ts";
import {Product} from "../../entity";


const productsMock: Product[] = [
    {
        id: 1,
        code: "123456",
        description: "Producto 1",
    }
]


export default function ProductManagement() {
    // const {products} = useProduct();
    // const [letter,setLetter] = useState<string|null>(null);
    // const {products:productsSearched} = useItemByDescriptionLetter(letter); // esto es para llamarlo
    const [products, setProducts] = useState<Product[]>(productsMock);

    const handleSearchProduct = (descLet: string) => {
        // setLetter(descLet)
        console.log(descLet);
    }

    // Aqui tambien iria la logica para agregar un producto xd:
    const addProductHandler = (product: Product) => {
        console.log("Agregado:", product);
        const newProduct = {
            ...product,
            id: Date.now() // Generar un ID único temporal
        };
        setProducts(prevProducts => [...prevProducts, newProduct]);
    }

    return (
        <>
            <section className={"PRODUCT_PAGE PAGE"}>
                <HeadProductManagement
                    addProductMethod={addProductHandler}
                    className={"PRODUCT_PAGE_izq"}
                    searchProduct={handleSearchProduct}
                />
                <ProductsPlacement
                    className={"PRODUCT_PAGE_der"}
                    // products={productsSearched?productsSearched:products}
                    products={products}
                />
            </section>
        </>
    )
}