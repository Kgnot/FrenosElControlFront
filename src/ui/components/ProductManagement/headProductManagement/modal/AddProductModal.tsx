import './AddProductModal.css'
import {ButtonType1} from "../../../utils/buttons";
import {Product} from "../../../../../entity";
import {useState} from "react";

interface AddProductModalProps{
    parentMethod: (product: Product) => void
}

export const AddProductModal = (
    {
        parentMethod,
    }: AddProductModalProps
) => {
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");

    const handleParentMethodAddProduct = () => {
        if (description.trim()) {
            parentMethod({
                id: -1, // Se generará un ID real en el componente padre
                code: code.trim(),
                description: description.trim(),
            });
            // Limpiar campos después de agregar
            setCode("");
            setDescription("");
        } else {
            alert("Por favor, completa todos los campos");
        }
    }

    return (
        <section className="add-product-modal">
            <h3>Agregar Nuevo Producto</h3>
            <div className="form-group">
                <label htmlFor="code">Código:</label>
                <input
                    id="code"
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Ingresa el código del producto"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ingresa la descripción del producto"
                />
            </div>
            <div className="button-group">
                <ButtonType1 parentMethod={handleParentMethodAddProduct}>
                    Agregar
                </ButtonType1>
            </div>
        </section>
    )
}