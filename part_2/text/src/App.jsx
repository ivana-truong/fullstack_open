import Note from './components/Note'

const App = ({notes}) => {
  // const result = notes.map(note => note.id)
  // console.log(result)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map((note) => <Note content={note.content} key={note.id}/>)}
      </ul>
    </div>
  )
}

export default App