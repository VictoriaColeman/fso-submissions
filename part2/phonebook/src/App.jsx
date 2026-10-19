import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-123456',
     },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const entriesToShow = persons.filter(person => person.name.toLowerCase().includes(filter))

  const addEntry = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newEntry = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newEntry))
    }
    setNewName('')
    setNewNumber('')

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter for entries with name: <input value={filter} onChange={handleFilter} />
      </div>
      <h2>Add New Entry</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit" onClick={addEntry}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {entriesToShow.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
      </div>
    </div>
  )
}

export default App
