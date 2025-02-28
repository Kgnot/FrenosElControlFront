export const FilterCustom = ({className}: { className: string }) => {
    return (
        <section className={`${className}`}>
            <span> Cliente: </span>
            <input type="text" placeholder={"Digite el nombre del cliente"}/>
        </section>
    )
}
