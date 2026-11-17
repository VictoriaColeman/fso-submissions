const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
morgan.token('body', request => JSON.stringify(request.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let content = `Phonebook has info for ${persons.length} people <br /> ${Date()}`
    response.send(content)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

const generateId = () => {
    let id
    do {
        id = Math.floor(Math.random() * 1000000)
    } while (persons.find(p => p.id === id))

    return String(id)
}

app.post('/api/persons', (request, response) => {

    if (!request.body) {
        return response.status(400).json({
            error: 'empty entry'
        })
    }

    const repeatName = persons.find(p => p.name === request.body.name)

    if (!request.body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (!request.body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    } else if (repeatName) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: generateId(),
        name: request.body.name,
        number: request.body.number
    }
    persons = persons.concat(person)
    response.json(person)

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
