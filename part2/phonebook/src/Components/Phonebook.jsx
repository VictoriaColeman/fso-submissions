import services from '../services/persons'

const Phonebook = ({ persons, handleDelete, filter }) => {
    const entriesToShow = persons.filter(person => person.name.toLowerCase().includes(filter))


    const entry = (person) => {
        return (
            <div key={person.id}> {person.name} {person.number}  <button onClick={handleDelete} id={person.id}>delete</button></div>
        )
    }

    return (
        <>
            <h2>Numbers</h2>
            <div>
                {entriesToShow.map(person => entry(person))}
            </div>
        </>
    )
}

export default Phonebook
