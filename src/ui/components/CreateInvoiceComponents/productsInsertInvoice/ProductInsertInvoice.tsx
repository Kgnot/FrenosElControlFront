
import './ProductInsertInvoice.css'
import {useState, useEffect} from 'react';

import {TableComponent} from "../../utils/table/TableComponent.tsx";
import {ItemInvoiceModal} from "./modal/item/ItemInvoiceModal.tsx";
import {ButtonType1, ButtonType2, ButtonType3} from "../../utils/buttons";
import {Invoice} from "../../../../entity/Invoice.ts";
import {InvoiceItems} from "../../../../entity/InvoiceItems.ts";
import {ProductFormValues} from "../../../../form/ProductForm.ts";

interface ProductInsertInvoiceProps {
    invoice?: Invoice
    className?: string;
}

export const ProductInsertInvoice = (
    {
        invoice,
        className
    }: ProductInsertInvoiceProps) => {
    const [products, setProducts] = useState<InvoiceItems[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<InvoiceItems | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

    // useEffect para cargar los productos cuando se pasa una invoice
    useEffect(() => {
        if (invoice && invoice.invoiceItems) {
            setProducts(invoice.invoiceItems);
        } else {
            setProducts([]);
        }
    }, [invoice]);

    const columns = [
        {name: 'Id', selector: (row: InvoiceItems) => `${row.id[0]}-${row.id[1]}`},
        {name: 'Código del producto', selector: (row: InvoiceItems) => row.item.code},
        {name: 'Descripción', selector: (row: InvoiceItems) => row.item.description},
        {name: 'Cantidad', selector: (row: InvoiceItems) => row.quantity},
        {name: 'Precio', selector: (row: InvoiceItems) => row.price},
        {name: 'Valor unitario', selector: (row: InvoiceItems) => row.unitValue},
        {name: 'Total', selector: (row: InvoiceItems) => row.total}
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
            `¿Estás seguro de que deseas eliminar el producto "${selectedProduct.item.code}"?`
        );

        if (confirmDelete) {
            setProducts(prev => prev.filter(product =>
                !(product.id[0] === selectedProduct.id[0] && product.id[1] === selectedProduct.id[1])
            ));
            setSelectedProduct(null);
        }
    };

    const handleRowClick = (row: InvoiceItems) => {
        setSelectedProduct(row);
    };

    const handleSaveProduct = (formData: ProductFormValues) => {
        const total = formData.quantity * formData.unitValue;

        if (modalMode === 'add') {
            // Generar nuevo ID compuesto
            const invoiceId = invoice?.id || 1;
            const maxItemId = products.length > 0
                ? Math.max(...products.map(p => p.id[1]))
                : 0;
            const newItemId = maxItemId + 1;

            const newProduct: InvoiceItems = {
                id: [invoiceId, newItemId],
                price: formData.unitValue, // Usar unitValue como price por ahora
                quantity: formData.quantity,
                unitValue: formData.unitValue,
                total,
                item: {
                    id: newItemId,
                    itemType: 'producto',
                    code: formData.productCode,
                    description: formData.productDescription
                }
            };
            setProducts(prev => [...prev, newProduct]);
        } else {
            setProducts(prev =>
                prev.map(product =>
                    product.id[0] === selectedProduct!.id[0] && product.id[1] === selectedProduct!.id[1]
                        ? {
                            ...product,
                            price: formData.unitValue,
                            quantity: formData.quantity,
                            unitValue: formData.unitValue,
                            total,
                            item: {
                                ...product.item,
                                code: formData.productCode,
                                description: formData.productDescription
                            }
                        }
                        : product
                )
            );
        }

        setModalOpen(false);
        setSelectedProduct(null);
    };

    // Función auxiliar para crear datos adaptados para el TableComponent
    const getTableData = () => {
        return products.map(product => ({
            ...product,
            // Crear un id numérico único para el TableComponent
            id: product.id[0] * 10000 + product.id[1]
        }));
    };

    // Función para obtener el ID seleccionado adaptado
    const getSelectedRowId = () => {
        if (!selectedProduct) return undefined;
        return selectedProduct.id[0] * 10000 + selectedProduct.id[1];
    };

    // Convertir InvoiceItems a ProductFormValues para el modal
    const getProductFormData = (): ProductFormValues | null => {
        if (!selectedProduct) return null;

        return {
            productCode: selectedProduct.item.code,
            productDescription: selectedProduct.item.description,
            quantity: selectedProduct.quantity,
            unitValue: selectedProduct.unitValue
        };
    };

    // Calcular total de la factura
    const invoiceTotal = products.reduce((sum, product) => sum + product.total, 0);

    return (
        <section className={`productInsertInvoice ${className}`}>
            <div className={"titleProductInsertInvoice"}>
                <div className="title-row">
                    <h4>Items de la factura</h4>
                    <div className="invoice-total">
                        <span>Total: ${invoiceTotal.toFixed(2)}</span>
                    </div>
                </div>
                <div>
                    <ButtonType1 parentMethod={handleAddProduct}>Añadir item</ButtonType1>
                    <ButtonType2 parentMethod={handleEditProduct}>Modificar item</ButtonType2>
                    <ButtonType3 parentMethod={handleDeleteProduct}>Eliminar Item</ButtonType3>
                </div>
            </div>

            <TableComponent
                columns={columns}
                data={getTableData()}
                onRowClick={(row) => {
                    // Encontrar el producto original usando el ID adaptado
                    const originalProduct = products.find(p =>
                        (p.id[0] * 10000 + p.id[1]) === row.id
                    );
                    if (originalProduct) {
                        handleRowClick(originalProduct);
                    }
                }}
                selectedRowId={getSelectedRowId()}
            />

            <ItemInvoiceModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setSelectedProduct(null);
                }}
                onSave={handleSaveProduct}
                product={getProductFormData()}
                mode={modalMode}
            />
        </section>
    );
};