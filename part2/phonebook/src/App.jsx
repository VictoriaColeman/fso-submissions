import { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import Form from './Components/Form'
import Phonebook from './Components/Phonebook'
import services from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    services
      .getAll()
      .then(data => setPersons(data))
  }, [])

  const handleFilter = event => setFilter(event.target.value)
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumChange = event => setNewNumber(event.target.value)

  const addEntry = event => {
    event.preventDefault()
    const repeatEntry = persons.find(person => person.name === newName)
    if (repeatEntry) {
      const message = `${newName} is already added to phonebook, replace the old number with new one?`
      if (window.confirm(message)) {
        services
          .updateEntry({ ...repeatEntry, number: newNumber })
          .then(entry => {
            setPersons(persons.filter(person => person.id !== repeatEntry.id).concat(entry))
          })
      }
    } else {
      const newEntry = {
        name: newName,
        number: newNumber,
      }
      services
        .addEntry(newEntry)
        .then(entry => setPersons(persons.concat(entry)))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = event => {
    const id = event.target.id
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      services.deleteEntry(id)
      setPersons(persons.filter(entry => entry.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} eventHandler={handleFilter} />
      <Form name={newName} number={newNumber} handleNameChange={handleNameChange} handleNumChange={handleNumChange} handleSubmit={addEntry} />
      <Phonebook persons={persons} handleDelete={handleDelete} filter={filter} />
    </div>
  )
}

export default App
