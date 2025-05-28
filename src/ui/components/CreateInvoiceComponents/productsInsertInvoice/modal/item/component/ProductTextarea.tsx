import React from 'react';

interface ProductTextareaProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    rows?: number;
}

export const ProductTextarea: React.FC<ProductTextareaProps> = ({
                                                                    id,
                                                                    label,
                                                                    value,
                                                                    onChange,
                                                                    error,
                                                                    rows = 3
                                                                }) => (
    <div className="form-group">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            className={`form-textarea ${error ? 'form-input-error' : ''}`}
        />
        {error && <span className="error-message">{error}</span>}
    </div>
);