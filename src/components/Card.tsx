import React from "react"
import { Country } from "../interfaces/interfaceCountry"

interface ICountryProps{
    country: Country
}

export const Card:React.FC<ICountryProps> = ({country}) => {
    return(
        <div>
            <h1>Name Country: {country.name.common}</h1>
            <img src={country.flags.svg} />
            <h4>Region: {country.region}</h4>
        </div>
    )
}