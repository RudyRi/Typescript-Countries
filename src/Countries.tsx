import { useCountryData } from "./useCountryData"
import { ListCountries } from "./components/ListCountries"
import { useState } from "react"

export const Countries:React.FC = () => {
    const [regionSelect, setRegionSelect] = useState<string|null>(null)
    const countries = useCountryData(regionSelect)
    return(
        <div>
            <select className="form-select" onChange={(e) => setRegionSelect(e.target.value)}>
                <option value="all">All</option>
                <option value="Americas">America</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
            </select>
            {countries.length > 0 ? <ListCountries countries={countries}/> : <h1>Loading...</h1>}]
            </div>
    )
}