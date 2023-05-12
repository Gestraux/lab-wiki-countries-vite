import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function CountryDetails({ countries}) {
  const {countryId }= useParams()
  const details = countries.find (country => {
    return country.alpha3Code === countryId
})
console.log(countryId)
return (
    <div>
      <h1>{details.name.common}</h1>
        <p>{details.capital}</p>
      <ul>
        {details.borders.map((country) => {
          return (
        <li> <Link to={`/${country}`}>
          {country}</Link>
        </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CountryDetails