import { useState } from 'react'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import ShowNames from './components/ShowNames'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)


  const handleNewName = (event) => {
    // console.log("Sync new name", event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    if (searchName.length === 0) {
      setShowAll(false)
    }
    setSearchName(event.target.value)
  }


  const personsToShow = showAll
    ? persons
    // else search for matches
    : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const addPerson = (event) => {
    // prevent default handling
    event.preventDefault()

    const addNewName = {
      name: newName,
      number: newNumber
    }

    // Check if name already in `persons`
    if (persons.find(person => person.name === newName)) {
      // console.log("Duplicate names")
      alert(`${newName} already added in phonebook`)
    }
    else {
      // Add new name
      setPersons(persons.concat(addNewName))
    }

    // Reset `newName`
    setNewName('')
    setNewNumber('')
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchName} onChange={handleSearchName}/>
      <h2>Add a New Contact</h2>
      <AddContact
        onSubmit={addPerson}
        nameValue={newName}
        nameOnChange={handleNewName}
        numberValue={newNumber}
        numberOnChange={handleNewNumber}
      />
      <h2>Numbers</h2>
      <ShowNames persons={personsToShow}/>
    </div>
  )
}

export default App