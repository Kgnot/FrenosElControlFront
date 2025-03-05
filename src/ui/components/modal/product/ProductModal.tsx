import './ProductModal.css'
import {Product} from "../../../../entity";
import {ReactNode} from "react";
import {ButtonType2} from "../../utils/buttons/ButtonType2.tsx";

interface ProductModalProps {
    className?: string
    product: Product;
    children?: ReactNode
    quitModal: () => void
}

export const ProductModal = ({className, product, children, quitModal}: ProductModalProps) => {

    return (
        <div className={`${className} productModal`}>
            {product.description}
            {children}
            <ButtonType2
                parentMethod={quitModal}>
                Salir
            </ButtonType2>
        </div>
    )
}

