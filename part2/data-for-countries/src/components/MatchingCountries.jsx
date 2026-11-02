
const MatchingCountries = ({ countryList }) => {
    if (countryList.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countryList.length > 1 && countryList.length <= 10) {
        return (
            <div>
                {countryList.map(country => <div key={country.index}>{country.name}</div>)}
            </div>
        )
    } else {
        return null
    }
}

export default MatchingCountries
