import './ProductInsertInvoice.css'
import {TableComponent} from "../../utils/table/TableComponent.tsx";
import {ButtonType1} from "../../utils/buttons/ButtonType1.tsx";
import {ButtonType2} from "../../utils/buttons/ButtonType2.tsx";
import {ButtonType3} from "../../utils/buttons/ButtonType3.tsx";

interface ProductInsert {
    id: number;
    productCode: string;
    productDescription: string;
    quantity: number;
    unitValue: number
    total: number
}

const mockData: ProductInsert[] = [
    {
        id: 1,
        productCode: 'Producto1',
        productDescription: 'descripción del producto1',
        quantity: 10,
        unitValue: 15000,
        total: 10 * 15000
    },
    {
        id: 2,
        productCode: 'Producto3',
        productDescription: 'descripción del producto2',
        quantity: 1,
        unitValue: 15000,
        total: 1 * 15000
    },
    {
        id: 3,
        productCode: 'Producto2',
        productDescription: 'descripción del product3',
        quantity: 1,
        unitValue: 35000,
        total: 1 * 35000
    }
];

export const ProductInsertInvoice = ({className}: { className: string }) => {
    const columns = [
        {name: 'Id', selector: (row: ProductInsert) => row.id},
        {name: 'Código del producto', selector: (row: ProductInsert) => row.productCode},
        {name: 'Descripción', selector: (row: ProductInsert) => row.productDescription},
        {name: 'Cantidad', selector: (row: ProductInsert) => row.quantity},
        {name: 'Valor unitario', selector: (row: ProductInsert) => row.unitValue},
        {name: 'Total', selector: (row: ProductInsert) => row.total}
    ];


    return (
        <section className={`productInsertInvoice ${className}`}>
            <div className={"titleProductInsertInvoice"}>
                <h4>Items de la factura</h4>
                <div>
                    <ButtonType1>Añadir item</ButtonType1>
                    <ButtonType2>Modificar item</ButtonType2>
                    <ButtonType3>Eliminar Item</ButtonType3>
                </div>
            </div>
            <TableComponent columns={columns} data={mockData}/>
        </section>
    )
}