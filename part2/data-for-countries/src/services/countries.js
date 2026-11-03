import axios from 'axios'

const countryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () => {
    return (
        axios
            .get(countryUrl)
            .then(response => response.data)
    )
}

const getWeather = (entry, apiKey) => {
    const lat = entry.capitalInfo.latlng[0]
    const lon = entry.capitalInfo.latlng[1]
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`

    return (
        axios
            .get(url)
            .then(response => response.data)
    )
}


export default { getAllCountries, getWeather }
