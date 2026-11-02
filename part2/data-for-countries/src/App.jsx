import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import services from './services/countries'
import MatchingCountries from './components/MatchingCountries'
import CountryDisplay from './components/CountryDisplay'

function App() {
  const [filter, setFilter] = useState('')
  const [allData, setAllData] = useState(null)
  const [country, setCountry] = useState(null)

  useEffect(() => {
    services
      .getAll()
      .then(data => setAllData(data))
  }, [])

  const countriesToShow = []


  if (allData && !country) {
    for (const i in allData) {
      if (allData[i].name.common.toLowerCase().includes(filter.toLowerCase())) {
        countriesToShow.push({ index: i, name: allData[i].name.common})
      } else if (allData[i].name.official.toLowerCase().includes(filter.toLowerCase())) {
        countriesToShow.push({ index: i, name: allData[i].name.official })
      }
    }
    if (countriesToShow.length === 1) {
      setCountry(allData[countriesToShow[0].index])
    }
  }

  const handleInput = event => {
    setFilter(event.target.value)
    setCountry(null)
  }

  const handleShow = event => {
    setCountry(allData[event.target.id])
  }

  return (
    <>
      <Filter filter={filter} eventHandler={handleInput} />
      {country
        ? <CountryDisplay entry={country}/>
        : <MatchingCountries countriesToShow={countriesToShow} handleShow={handleShow} />
      }
    </>
  )
}

export default App
