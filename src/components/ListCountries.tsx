import { Card } from "./Card"
import { Country } from "../interfaces/interfaceCountry"

interface ICountryListProps{
    countries: Array<{
        name:{common:string}
        flags:{svg:string}
    }>
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