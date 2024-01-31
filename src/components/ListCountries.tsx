import { Country } from "../interfaces/interfaceCountry"
import { Card } from "./Card"


interface ICountryListProps{
    countries: Array<Country>
}

export const ListCountries:React.FC<ICountryListProps> = ({countries}) => {
    
    return(
        <>
        <div>
            {countries.map ((country) => {return <Card country={country}/>})}
            </div>
        </>
        
    )
}