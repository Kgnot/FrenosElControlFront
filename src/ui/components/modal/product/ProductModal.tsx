import './ProductModal.css'
import {ButtonType2,ButtonType3} from "../../utils/buttons";
import {Product} from "../../../../entity";
import {ReactNode} from "react";

interface ProductModalProps {
    className?: string
    product: Product;
    children?: ReactNode
    quitModal: () => void
}

export const ProductModal = ({className, product, children, quitModal}: ProductModalProps) => {

    return (
        <>
            {children}
            <div className={`${className} productModal`}>
                <p>Código: <input type="text" defaultValue={product.code} /> </p>
                <img src="/images/caja.png" alt="caja.pngxd"/>
                <p>Descripción: <input type="text" defaultValue={product.description}/></p>
                <div className={"productModalButtonsContainer"}>
                    <ButtonType2> Modificar </ButtonType2>
                    <ButtonType3
                        parentMethod={quitModal}>
                        Salir
                    </ButtonType3>

                </div>
            </div>
        </>
    )
}