import './HeadProductManagement.css'
import {ButtonType1} from "../../utils/buttons/ButtonType1.tsx";
import {ButtonType2} from "../../utils/buttons/ButtonType2.tsx";


export const HeadProductManagement = ({className}:{className:string}) =>
{
    return(
        <section className={`${className} headProductManagement`}>
            <h3> Inventario</h3>
            <span> Buscar Producto</span>
            <input type="text" placeholder="Descripción del producto"/>
            <ButtonType1> Añadir Producto</ButtonType1>
            <ButtonType2> Modificar Producto</ButtonType2>
        </section>
    )
}
