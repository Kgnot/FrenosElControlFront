import React from 'react';

interface CurrencyInputProps {
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
    error?: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
                                                                id,
                                                                label,
                                                                value,
                                                                onChange,
                                                                error
                                                            }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        if (rawValue === '' || /^(\d+\.?\d*|\.\d+)$/.test(rawValue)) {
            onChange(rawValue === '' ? 0 : parseFloat(rawValue));
        }
    };

    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type="text"
                id={id}
                value={value === 0 ? '' : value.toString()}
                onChange={handleChange}
                className={`form-input ${error ? 'form-input-error' : ''}`}
                placeholder="0.00"
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};