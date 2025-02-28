import './InvoiceSearch.css'
import {FilterList} from "../filterList/FilterList.tsx";
import {FilterDate} from "../filterTypes/filterDate/FilterDate.tsx";
import {FilterYear} from "../filterTypes/FilterYear/FilterYear.tsx";
import {FilterMonth} from "../filterTypes/filterMonth/FilterMonth.tsx";
import {FilterCustom} from "../filterTypes/filterCustomer/FilterCustom.tsx";
import {FilterID} from "../filterTypes/filterID/FilterID.tsx";
import {useState} from "react";


export const InvoiceSearch = ({ className }: { className: string }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleFilterToggle = (filterName: string) => {
        setSelectedFilters((prev) => {
            if (prev.includes(filterName)) {
                return prev.filter((f) => f !== filterName);
            } else {
                return [...prev, filterName];
            }
        });
    };

    return (
        <section className={`${className} invoiceSearch`}>
            <h2><b>Búsqueda de Facturas.</b></h2>

            {/* Botones de filtros */}
            <div className={"filter_buttons_button"}>
                <FilterList parentMethod={handleFilterToggle}/>
                <button className="searchInvoiceButton" >Buscar</button>
            </div>
            {/* Render dinámico de los filtros seleccionados */}
            <div className="active-filters">
                {selectedFilters.includes("Fecha") && <FilterDate className="active-filters-type"/>}
                {selectedFilters.includes("Mes") && <FilterMonth className="active-filters-type"/>}
                {selectedFilters.includes("Año") && <FilterYear className="active-filters-type"/>}
                {selectedFilters.includes("Cliente") && <FilterCustom className="active-filters-type"/>}
                {selectedFilters.includes("ID Factura") && <FilterID className="active-filters-type"/>}
                {selectedFilters.length===0 &&
                    <div className="waitingFilters">
                        <img src="/images/logo.png" alt=""/>
                    </div>
                }
            </div>
        </section>
    );
};