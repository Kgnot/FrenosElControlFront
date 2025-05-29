import React from 'react';

interface ProductInputProps {
    id: string;
    label: string;
    type?: string;
    value: string | number;
    onChange: (value: string | number) => void;
    error?: string;
    min?: number;
    step?: string;
    placeholder?: string;
}

export const ProductInput: React.FC<ProductInputProps> = ({
                                                              id,
                                                              label,
                                                              type = 'text',
                                                              value,
                                                              onChange,
                                                              error,
                                                              min,
                                                              step,
                                                              placeholder
                                                          }) => (
    <div className="form-group">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
            className={`form-input ${error ? 'form-input-error' : ''}`}
            min={min}
            step={step}
            placeholder={placeholder}
        />
        {error && <span className="error-message">{error}</span>}
    </div>
);