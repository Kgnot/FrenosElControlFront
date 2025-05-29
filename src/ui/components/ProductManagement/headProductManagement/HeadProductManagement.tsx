import './HeadProductManagement.css'
import {ButtonType1,ButtonType2} from "../../utils/buttons";
import {useRef, useState} from "react";
import {SearchInput} from "../../utils/searchInput/SearchInput.tsx";
import {/*fetchItemsByLetterAPI,*/ fetchItemsByWordAPI} from "../../../../function";
import {Product} from "../../../../entity";
import {BlackModal} from '../../utils/modal/BalckModal.tsx';
import {AddProductModal} from "./modal/AddProductModal.tsx";


interface HeadProductManagementProps {
    className: string;
    searchProduct: (letter: string) => void;
    addProductMethod: (Product: Product) => void;
}

export const HeadProductManagement = (
    {
        className,
        searchProduct,
        addProductMethod,
    }: HeadProductManagementProps) => {
    // apartado del modal:
    const [showModal, setShowModal] = useState(false);

    const closePreview = () => {
        setShowModal(false);
    };

    const inputSearchProduct = useRef<HTMLInputElement>(null);

    const handleProductSelect = (product: Product) => {
        searchProduct(product.description);
    };

    const handleAddProduct = (product: Product) => {
        addProductMethod(product);
        setShowModal(false); // Cerrar el modal después de agregar
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
                <ButtonType1 parentMethod={() => setShowModal(true)}>
                    Añadir Producto
                </ButtonType1>
                {/*    Modal para agregar producto */}
                <BlackModal visible={showModal} onClose={closePreview}>
                    <AddProductModal parentMethod={handleAddProduct} />
                </BlackModal>
            </div>
        </section>
    );
};