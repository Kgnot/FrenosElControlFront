import { useState } from 'react';

import {TableComponent} from "../../utils/table/TableComponent.tsx";
import {ItemInvoiceModal} from "./modal/item/ItemInvoiceModal.tsx";
import {ButtonType1, ButtonType2,ButtonType3} from "../../utils/buttons";

interface ProductInsert {
    id: number;
    productCode: string;
    productDescription: string;
    quantity: number;
    unitValue: number;
    total: number;
}

const initialMockData: ProductInsert[] = [];

export const ProductInsertInvoice = ({ className }: { className: string }) => {
    const [products, setProducts] = useState<ProductInsert[]>(initialMockData);
    const [selectedProduct, setSelectedProduct] = useState<ProductInsert | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

    const columns = [
        { name: 'Id', selector: (row: ProductInsert) => row.id },
        { name: 'Código del producto', selector: (row: ProductInsert) => row.productCode },
        { name: 'Descripción', selector: (row: ProductInsert) => row.productDescription },
        { name: 'Cantidad', selector: (row: ProductInsert) => row.quantity },
        { name: 'Valor unitario', selector: (row: ProductInsert) => row.unitValue },
        { name: 'Total', selector: (row: ProductInsert) => row.total }
    ];

    const handleAddProduct = () => {
        setSelectedProduct(null);
        setModalMode('add');
        setModalOpen(true);
    };

    const handleEditProduct = () => {
        if (!selectedProduct) {
            alert('Por favor selecciona un producto para modificar');
            return;
        }
        setModalMode('edit');
        setModalOpen(true);
    };

    const handleDeleteProduct = () => {
        if (!selectedProduct) {
            alert('Por favor selecciona un producto para eliminar');
            return;
        }

        const confirmDelete = window.confirm(
            `¿Estás seguro de que deseas eliminar el producto "${selectedProduct.productCode}"?`
        );

        if (confirmDelete) {
            setProducts(prev => prev.filter(product => product.id !== selectedProduct.id));
            setSelectedProduct(null);
        }
    };

    const handleRowClick = (row: ProductInsert) => {
        setSelectedProduct(row);
    };

    const handleSaveProduct = (productData: Omit<ProductInsert, 'id' | 'total'>) => {
        const total = productData.quantity * productData.unitValue;

        if (modalMode === 'add') {
            const newId = Math.max(...products.map(p => p.id)) + 1;
            const newProduct: ProductInsert = {
                ...productData,
                id: newId,
                total
            };
            setProducts(prev => [...prev, newProduct]);
        } else {
            setProducts(prev =>
                prev.map(product =>
                    product.id === selectedProduct!.id
                        ? { ...productData, id: selectedProduct!.id, total }
                        : product
                )
            );
        }

        setModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className={`productInsertInvoice ${className}`}>
            <div className={"titleProductInsertInvoice"}>
                <h4>Items de la factura</h4>
                <div>
                    <ButtonType1 parentMethod={handleAddProduct}>Añadir item</ButtonType1>
                    <ButtonType2 parentMethod={handleEditProduct}>Modificar item</ButtonType2>
                    <ButtonType3 parentMethod={handleDeleteProduct}>Eliminar Item</ButtonType3>
                </div>
            </div>

            <TableComponent
                columns={columns}
                data={products}
                onRowClick={handleRowClick}
                selectedRowId={selectedProduct?.id}
            />

            <ItemInvoiceModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setSelectedProduct(null);
                }}
                onSave={handleSaveProduct}
                product={selectedProduct}
                mode={modalMode}
            />
        </section>
    );
};