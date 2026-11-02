const MatchingCountries = ({ countriesToShow, handleShow}) => {
    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
        return (
            <div>
                {countriesToShow.map(country => {return (
                    <div key={country.index}>
                        {country.name} <button onClick={handleShow} id={country.index}>Show</button>
                    </div>
                )})}
            </div>
        )
    }
}

export default MatchingCountries
