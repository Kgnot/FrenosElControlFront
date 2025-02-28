

export const FilterID = ({ className }: { className: string }) => {
    return (
        <>
            <label htmlFor="filter_id" className={` ${className} filterIDLabel` }>
                <input type="number" id={"filter_id"} name={"filter_id"}/>
            </label>
        </>
    )
}

