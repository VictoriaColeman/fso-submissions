
const CountryDisplay = ({ entry, weather }) => {
    if (!entry || !weather) {
        return null
    } else {
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
                <h2>Weather in {entry.capital}</h2>
                <div>Temperature {weather.main.temp} Celsius</div>
                <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`} alt={weather.weather.description} />
                <div>Wind {weather.wind.speed} m/s</div>
            </div>
        )
    }
}

export default CountryDisplay
