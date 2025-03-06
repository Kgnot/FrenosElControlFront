import './ProductModal.css'
import {Product} from "../../../../entity";
import {ReactNode} from "react";
import {ButtonType2} from "../../utils/buttons/ButtonType2.tsx";
import {ButtonType3} from "../../utils/buttons/ButtonType3.tsx";

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

