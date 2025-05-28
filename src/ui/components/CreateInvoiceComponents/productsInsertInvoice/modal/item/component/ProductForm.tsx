import React from 'react';
import { ProductInput } from './ProductInput.tsx';
import { ProductTextarea } from './ProductTextarea.tsx';
import { CurrencyInput } from './CurrencyInput.tsx';
import {ButtonType1} from "../../../../../utils/buttons";
import { ProductFormValues } from '../../../../../../../form/ProductForm.ts';

interface ProductFormProps {
    formData: ProductFormValues;
    errors: Record<string, string>;
    onChange: (field: keyof ProductFormValues, value: string | number) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
    mode: 'add' | 'edit';
    total: number;
}

export const ProductForm: React.FC<ProductFormProps> = ({
                                                            formData,
                                                            errors,
                                                            onChange,
                                                            onSubmit,
                                                            onClose,
                                                            mode,
                                                            total
                                                        }) => (
    <form onSubmit={onSubmit}>
        <ProductInput
            id="productCode"
            label="Código del Producto *"
            value={formData.productCode}
            onChange={(value) => onChange('productCode', value as string)}
            error={errors.productCode}
        />

        <ProductTextarea
            id="productDescription"
            label="Descripción *"
            value={formData.productDescription}
            onChange={(value) => onChange('productDescription', value)}
            error={errors.productDescription}
        />

        <div className="form-row">
            <div className="form-group form-group-half">
                <ProductInput
                    id="quantity"
                    label="Cantidad *"
                    type="number"
                    value={formData.quantity}
                    onChange={(value) => onChange('quantity', value as number)}
                    error={errors.quantity}
                    min={1}
                />
            </div>

            <div className="form-group form-group-half">
                <CurrencyInput
                    id="unitValue"
                    label="Valor Unitario *"
                    value={formData.unitValue}
                    onChange={(value) => onChange('unitValue', value)}
                    error={errors.unitValue}
                />
            </div>
        </div>

        <div className="total-display">
            <strong>Total: ${total.toLocaleString()}</strong>
        </div>

        <div className="modal-actions">
            <ButtonType1 parentMethod={onClose}>Cancelar</ButtonType1>
            <ButtonType1 type="submit">
                {mode === 'add' ? 'Añadir' : 'Guardar'}
            </ButtonType1>
        </div>
    </form>
);