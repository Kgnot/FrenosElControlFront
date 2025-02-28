export const FilterID = ({className}: { className: string }) => {
    return (
        <div className={`${className} filterID`}>
            <span> ID Factura: </span>
            <input type="number" id={"filter_id"} name={"filter_id"} placeholder={"Digíte el id de la factura"}/>
        </div>
    )
}

