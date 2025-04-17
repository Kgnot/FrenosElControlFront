import React, {useState, useEffect, useRef} from 'react';
import './SearchInput.css'
import {ButtonType1} from "../buttons/ButtonType1.tsx";

interface SearchInputProps<T> {
    searchFunction: (query: string) => Promise<T[]>;
    renderItem: (item: T) => React.ReactNode;
    getItemLabel: (item: T) => string;  // Esta función nos dice qué texto poner en el input
    onSelect: (item: T) => void;
    placeholder?: string;
    className?: string;
}

export const SearchInput = <T, >({
                                     searchFunction,
                                     renderItem,
                                     getItemLabel,
                                     onSelect,
                                     placeholder,
                                     className
                                 }: SearchInputProps<T>) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);  // controla si el dropdown es visible
    const containerRef = useRef<HTMLDivElement>(null);  // para detectar clics fuera

    useEffect(() => {
        const fetchResults = async () => {
            if (query.trim().length === 0) {
                setResults([]);
                setShowDropdown(false);  // Oculta dropdown si no hay texto
                return;
            }
            setIsLoading(true);
            try {
                const res = await searchFunction(query);
                setResults(res);
                setShowDropdown(true);  // Mostrar resultados
            } catch (err) {
                console.error("Error fetching search results", err);
            } finally {
                setIsLoading(false);
            }
        };

        const timeout = setTimeout(fetchResults, 500);  // debounce de 500ms
        return () => clearTimeout(timeout);
    }, [query, searchFunction]);

    // Cierra dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowDropdown(false);

            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchButtonClick = () => {
        if (query.trim()) {
            setShowDropdown(true);
        }
    };

    return (
        <div ref={containerRef} className={`${className} searchInputContainer`}>
            <div className="mainContainerSearchInput">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setShowDropdown(results.length > 0)} // Mostrar resultados si hay, al enfocar
                />
                <ButtonType1 className="searchInputButton" parentMethod={handleSearchButtonClick}>
                    Buscar
                </ButtonType1>
            </div>

            {isLoading && <p>Cargando...</p>}

            {showDropdown && results.length > 0 && (
                <ul style={{
                    position: 'absolute',
                    background: 'white',
                    border: '1px solid #ddd',
                    listStyle: 'none',
                    margin: 0,
                    padding: '5px',
                    zIndex: 1000,
                    maxHeight: '200px',
                    overflowY: 'auto',
                    width: '100%'
                }}>
                    {results.map((item, index) => (
                        <li
                            key={index}
                            style={{ padding: '5px', cursor: 'pointer' }}
                            onClick={() => {
                                setQuery(getItemLabel(item));
                                onSelect(item);
                                setShowDropdown(false);  // Oculta dropdown tras seleccionar
                            }}
                        >
                            {renderItem(item)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
