import './HeadProductManagement.css'
import {ButtonType1} from "../../utils/buttons/ButtonType1.tsx";
import {ButtonType2} from "../../utils/buttons/ButtonType2.tsx";
import {useRef} from "react";
import {SearchInput} from "../../utils/searchInput/SearchInput.tsx";
import {/*fetchItemsByLetterAPI,*/ fetchItemsByWordAPI} from "../../../../function";
import {Product} from "../../../../entity";


interface HeadProductManagementProps {
    className: string;
    searchProduct: (letter: string) => void;
}

export const HeadProductManagement = ({className, searchProduct}: HeadProductManagementProps) => {
    const inputSearchProduct = useRef<HTMLInputElement>(null);

    const handleProductSelect = (product: Product) => {
        searchProduct(product.description);
    };

    return (
        <section className={`${className} headProductManagement`}>
            <h3>Inventario</h3>
            <span>Buscar Producto</span>

            <SearchInput<Product>
                searchFunction={fetchItemsByWordAPI}
                renderItem={(product) => (
                    <div>
                        {product.description}
                    </div>
                )}
                getItemLabel={(product) => product.description}  // Mostrar en el input el nombre
                onSelect={handleProductSelect}
                placeholder="Descripción del producto"
            />
            <div className="headProductManagementButtonContainer">
                <ButtonType2 parentMethod={() => searchProduct(inputSearchProduct.current?.value || '')}>
                    Buscar Producto
                </ButtonType2>
                <ButtonType1>Añadir Producto</ButtonType1>
            </div>
        </section>
    );
};