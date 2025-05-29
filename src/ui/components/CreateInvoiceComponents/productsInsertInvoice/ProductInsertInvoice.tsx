import './ProductInsertInvoice.css';
import { useState, useEffect } from 'react';
import { TableComponent } from "../../utils/table/TableComponent.tsx";
import { ItemInvoiceModal } from "./modal/item/ItemInvoiceModal.tsx";
import { ButtonType1, ButtonType2, ButtonType3 } from "../../utils/buttons";
import { Invoice } from "../../../../entity/Invoice.ts";
import { InvoiceItems } from "../../../../entity/InvoiceItems.ts";
import { ProductFormValues } from "../../../../form/ProductForm.ts";

interface ProductInsertInvoiceProps {
    invoice?: Invoice;
    className?: string;
}

export const ProductInsertInvoice = ({ invoice, className = "" }: ProductInsertInvoiceProps) => {
    const [products, setProducts] = useState<InvoiceItems[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<InvoiceItems | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

    // Cargar productos cuando se pasa una invoice
    useEffect(() => {
        setProducts(invoice?.invoiceItems || []);
    }, [invoice]);

    const columns = [
        { name: 'ID', selector: (row: InvoiceItems) => `${row.id[0]}-${row.id[1]}`, width: '80px' },
        { name: 'Código', selector: (row: InvoiceItems) => row.item.code, width: '120px' },
        { name: 'Descripción', selector: (row: InvoiceItems) => row.item.description },
        { name: 'Cant.', selector: (row: InvoiceItems) => row.quantity, width: '80px' },
        { name: 'Precio', selector: (row: InvoiceItems) => `$${row.price.toFixed(2)}`, width: '100px' },
        { name: 'Valor Unit.', selector: (row: InvoiceItems) => `$${row.unitValue.toFixed(2)}`, width: '110px' },
        { name: 'Total', selector: (row: InvoiceItems) => `$${row.total.toFixed(2)}`, width: '100px' }
    ];

    // Generar ID único para tabla
    const generateTableId = (invoiceItems: InvoiceItems): number => {
        return invoiceItems.id[0] * 10000 + invoiceItems.id[1];
    };

    // Encontrar producto por ID de tabla
    const findProductByTableId = (tableId: number): InvoiceItems | undefined => {
        return products.find(p => generateTableId(p) === tableId);
    };

    const handleAddProduct = () => {
        setSelectedProduct(null);
        setModalMode('add');
        setModalOpen(true);
    };

    const handleEditProduct = () => {
        if (!selectedProduct) {
            // TODO: Reemplazar con toast/notification component
            alert('Por favor selecciona un producto para modificar');
            return;
        }
        setModalMode('edit');
        setModalOpen(true);
    };

    const handleDeleteProduct = () => {
        if (!selectedProduct) {
            // TODO: Reemplazar con toast/notification component
            alert('Por favor selecciona un producto para eliminar');
            return;
        }

        // TODO: Reemplazar con modal de confirmación personalizado
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

    const handleRowClick = (row: any) => {
        const originalProduct = findProductByTableId(row.id);
        if (originalProduct) {
            setSelectedProduct(originalProduct);
        }
    };

    const handleSaveProduct = (formData: ProductFormValues) => {
        const total = formData.quantity * formData.unitValue;

        if (modalMode === 'add') {
            const invoiceId = invoice?.id || 1;
            const maxItemId = products.length > 0
                ? Math.max(...products.map(p => p.id[1]))
                : 0;
            const newItemId = maxItemId + 1;

            const newProduct: InvoiceItems = {
                id: [invoiceId, newItemId],
                price: formData.unitValue,
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
        } else if (selectedProduct) {
            setProducts(prev =>
                prev.map(product =>
                    product.id[0] === selectedProduct.id[0] && product.id[1] === selectedProduct.id[1]
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

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    // Preparar datos para la tabla
    const tableData = products.map(product => ({
        ...product,
        id: generateTableId(product)
    }));

    // ID seleccionado para la tabla
    const selectedRowId = selectedProduct ? generateTableId(selectedProduct) : undefined;

    // Datos del formulario para el modal
    const productFormData: ProductFormValues | null = selectedProduct ? {
        productCode: selectedProduct.item.code,
        productDescription: selectedProduct.item.description,
        quantity: selectedProduct.quantity,
        unitValue: selectedProduct.unitValue
    } : null;

    // Calcular total de la factura
    const invoiceTotal = products.reduce((sum, product) => sum + product.total, 0);

    return (
        <section className={`product-insert-invoice ${className}`}>
            <header className="product-header">
                <div className="header-content">
                    <h3>Items de la factura</h3>
                    <span className="item-count">{products.length} items</span>
                </div>

                <div className="header-actions">
                    <ButtonType1 parentMethod={handleAddProduct}>
                        Añadir item
                    </ButtonType1>
                    <ButtonType2
                        parentMethod={handleEditProduct}
                        // disabled={!selectedProduct}
                    >
                        Modificar item
                    </ButtonType2>
                    <ButtonType3
                        parentMethod={handleDeleteProduct}
                        // disabled={!selectedProduct}
                    >
                        Eliminar item
                    </ButtonType3>
                </div>
            </header>

            <div className="table-container">
                <TableComponent
                    columns={columns}
                    data={tableData}
                    onRowClick={handleRowClick}
                    selectedRowId={selectedRowId}
                />
            </div>

            {products.length > 0 && (
                <footer className="invoice-summary">
                    <div className="summary-row">
                        <span className="summary-label">Total de la factura:</span>
                        <span className="summary-value">${invoiceTotal.toFixed(2)}</span>
                    </div>
                </footer>
            )}

            <ItemInvoiceModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveProduct}
                product={productFormData}
                mode={modalMode}
            />
        </section>
    );
};