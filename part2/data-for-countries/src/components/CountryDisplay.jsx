
const CountryDisplay = ({ country, allData }) => {
    if (!country) {
        return null
    } else {
        const entry = allData[country.index]
        const languages = []
        for (const key in entry.languages) {
            languages.push(entry.languages[key])
        }

        return (
            <div>
                <h1>{entry.name.common}</h1>
                <div>Capital {entry.capital}</div>
                <div>Area {entry.area}</div>
                <h2>Languages</h2>
                <ul>
                    {languages.map(language => <li key={language}>{language}</li>)}
                </ul>
                <img src={entry.flags.png} alt={entry.flags.alt}/>
            </div>
        )
    }
}

export default CountryDisplay
