import {useState} from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("Good count old val:", good)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    console.log("Neutral count old val:", neutral)
    setNeutral(neutral + 1)
  }

  const handleBad= () => {
    console.log("Bad count old val:", bad)
    setBad(bad + 1)
  }

  return (
    <div>
    <Title text="Give Feedback"/>
    <Button onClick={handleGood} text="good"/>
    <Button onClick={handleNeutral} text="neutral"/>
    <Button onClick={handleBad} text="bad"/>
    <Title text="Statistics"/>
    <History good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Title = ({text}) => <h3>{text}</h3>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  let average = 0
  let percent = 0
  if (total != 0) {
    average = ((good * 1) + (bad * -1) ) / total
    percent = ((good / total) * 100).toString() + "%"
  }

  return(
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="Total" value={total}/>
        <StatisticLine text="Average Score" value={average}/> 
        <StatisticLine text="Percent Positive" value={percent}/>
      </tbody>
    </table>
  )
}

const History = ({good, neutral, bad}) => {
  if ((good + neutral + bad) == 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return <Statistics good={good} neutral={neutral} bad={bad}/>
}

export default App  