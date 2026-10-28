const Phonebook = ({ persons, filter }) => {
    const entriesToShow = persons.filter(person => person.name.toLowerCase().includes(filter))

    return (
        <>
            <h2>Numbers</h2>
            <div>
                {entriesToShow.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
            </div>
        </>
    )
}

export default Phonebook
