import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import services from './services/countries'
import MatchingCountries from './components/MatchingCountries'
import CountryDisplay from './components/CountryDisplay'

function App() {
  const [filter, setFilter] = useState('')
  const [allData, setAllData] = useState(null)

  useEffect(() => {
    services
      .getAll()
      .then(data => setAllData(data))
  }, [])

  const countriesToShow = []
  let country = null

  if (allData) {
    for (const i in allData) {
      if (allData[i].name.common.toLowerCase().includes(filter)) {
        countriesToShow.push({ index: i, name: allData[i].name.common})
      } else if (allData[i].name.official.toLowerCase().includes(filter)) {
        countriesToShow.push({ index: i, name: allData[i].name.official })
      }
    }
    if (countriesToShow.length === 1) {
      country = countriesToShow[0]
    }
  }


  const handleInput = event => setFilter(event.target.value)


  return (
    <>
      <Filter filter={filter} eventHandler={handleInput} />
      <MatchingCountries countryList={countriesToShow} />
      <CountryDisplay country={country} allData={allData}/>
    </>
  )
}

export default App
