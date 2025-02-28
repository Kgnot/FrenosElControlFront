
export const FilterYear = ({ className }: { className: string }) => {

   const year = [ 2025,2026,2027,2028,2029,2030,2031,2032]

    return (
        <div className={className}>
            <span> Año: </span>
            <select>
                {year.map((item, index) => <option value={index + 1}>{item}</option>)}
            </select>
        </div>
    )
}
