
export const FilterMonth = ({className}:{className:string}) => {

    const months = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]

    return (
        <div className={className}>
            <span> Mes: </span>
            <select>
                {months.map((item, index) => <option value={index + 1}>{item}</option>)}
            </select>
        </div>

    )
}