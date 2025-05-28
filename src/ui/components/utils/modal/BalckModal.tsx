import { useEffect, useRef } from 'react';
import './BlackModal.css';

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
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div className="BlackModalOverlay" onClick={handleClickOutside}>
            <div className="BlackModalContent" ref={modalRef}>
                {children}
            </div>
        </div>
    );
};
