import './BlackModal.css'
import React, { useRef, useEffect } from 'react';


interface Props {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const BlackModal = ({ visible, onClose, children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (visible) {
            document.addEventListener('keydown', handleEsc);
            // Prevenir scroll del body cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, visible]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div className="BlackModalOverlay" onClick={handleClickOutside}>
            <div className="BlackModalContent" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};