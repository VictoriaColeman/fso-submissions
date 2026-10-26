import { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import Form from './Components/Form'
import Phonebook from './Components/Phonebook'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const handleFilter = event => setFilter(event.target.value)
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumChange = event => setNewNumber(event.target.value)
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
      <Filter filter={filter} eventHandler={handleFilter}/>
      <Form name={newName} number={newNumber} handleNameChange={handleNameChange} handleNumChange={handleNumChange} handleSubmit={addEntry} />
      <Phonebook persons={persons} filter={filter} />
    </div>
  )
}

export default App
