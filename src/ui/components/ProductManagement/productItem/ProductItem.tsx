import './ProductItem.css'
import {Product} from "../../../../entity";

interface ProductItemProps
{
    className?:string;
    product:Product
    handleModal:(product:Product)=>void
}


export const ProductItem = ({className,product,handleModal}:ProductItemProps) =>
{
    const code = product.code;
    const description = product.description;

    return(
        <section className={`${className} productItem`} onClick={()=>handleModal(product)}>
            <div> {code?code:" - - "} </div>
            <div> {description} </div>
        </section>
    )
}