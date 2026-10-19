import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addEntry = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const newEntry = { name: newName}
      setPersons(persons.concat(newEntry))
      setNewName('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value= {newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addEntry}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div key={person.name}>{person.name}</div>)}
      </div>
    </div>
  )
}

export default App
