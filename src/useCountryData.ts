import { useEffect, useState } from "react"
import { Country } from "./interfaces/interfaceCountry"



export const useCountryData = (regionFilter:string|null) :Country[] => {
    const [countries, setCountries] = useState<Country[]>([])
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const result:Country[] = await response.json()
            let filteredCountries:Country[] = result

            if(regionFilter){
                filteredCountries = filteredCountries.filter((country:Country) => country.region === regionFilter)
            }
            console.log(result[0].name.common)
            setCountries(filteredCountries)
        }
        fetchData()
        console.log(countries)
    })
    return countries
}