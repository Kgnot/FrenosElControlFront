import './ProductItem.css'

interface ProductItemProps
{
    className?:string;
    code?:string;
    description:string;
}


export const ProductItem = ({className,code,description}:ProductItemProps) =>
{
    return(
        <section className={`${className} productItem`}>
            <div> {code?code:" - - "} </div>
            <div> {description} </div>
        </section>
    )
}