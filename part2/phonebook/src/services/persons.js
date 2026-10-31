import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    return (
        axios
            .get(baseUrl)
            .then(response => response.data)
    )
}

const addEntry = (entry) => {
    return (
        axios
            .post(baseUrl, entry)
            .then(response => response.data)
    )
}

const deleteEntry = id => axios.delete(`${baseUrl}/${id}`)


const updateEntry = person => {
    return (
        axios
            .put(`${baseUrl}/${person.id}`, person)
            .then(response => response.data)
    )
}
export default { getAll, addEntry, deleteEntry, updateEntry }
