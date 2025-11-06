import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const maxIndex = anecdotes.length - 1
  
  const randomInt = () => {
    const random_integer = Math.floor(Math.random() * maxIndex)
    console.log("Selected index", random_integer)
    return random_integer
  }
  
  const [selected, setSelected] = useState(randomInt())
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => setSelected(randomInt())

  const handleVote = (index) => {
    return () => {
      const copy = [...votes]
      // console.log("Index", index)
      copy[index] += 1
      // console.log("Votes: ", copy)
      setVotes(copy)
    }
  }

  const findMaxIdx = (array) => {
    let max = array[0]
    let maxIdx = 0
    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
        maxIdx = i
      }
    }
    return maxIdx
  }

  const maxVotesIndex = findMaxIdx(votes)

  return (
    <div>
      <Title text="Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br></br>
      <Button onClick={handleVote(selected)} text="Vote"/>
      <Button onClick={handleNext} text="Next Anecdote"/>
      <Title text="Anecdote with the most votes"/>
      {anecdotes[maxVotesIndex]}
      <p>has {votes[maxVotesIndex]} votes</p>
      <br></br>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Title = ({text}) => <h2>{text}</h2>
export default App