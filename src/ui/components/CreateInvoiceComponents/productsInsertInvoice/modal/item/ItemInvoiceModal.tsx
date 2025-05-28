import React, { useState, useEffect } from 'react';
import './ProductModal.css';
import { z } from 'zod';
import { defaultProductValues, ProductFormValues, productSchema } from "../../../../../../form/ProductForm.ts";
import {ProductForm} from "./component/ProductForm.tsx";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (product: ProductFormValues) => void;
    product: ProductFormValues | null;
    mode: 'add' | 'edit';
}

export const ItemInvoiceModal: React.FC<ProductModalProps> = ({
                                                              isOpen,
                                                              onClose,
                                                              onSave,
                                                              product,
                                                              mode
                                                          }) => {
    const [formData, setFormData] = useState<ProductFormValues>(defaultProductValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (mode === 'edit' && product) {
            setFormData(product);
        } else {
            setFormData(defaultProductValues);
        }
        setErrors({});
    }, [mode, product, isOpen]);

    const validateForm = (): boolean => {
        try {
            productSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors = error.errors.reduce((acc, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {} as Record<string, string>);
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSave(formData);
        }
    };

    const handleChange = (field: keyof ProductFormValues, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const calculateTotal = (): number => formData.quantity * formData.unitValue;

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{mode === 'add' ? 'Añadir Producto' : 'Modificar Producto'}</h3>
                    <button className="modal-close-btn" onClick={onClose}>×</button>
                </div>

                <ProductForm
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onClose={onClose}
                    mode={mode}
                    total={calculateTotal()}
                />
            </div>
        </div>
    );
};