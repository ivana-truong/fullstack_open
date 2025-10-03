const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course = {course}/>
      <Content parts = {[part1, part2, part3]} exercises = {[exercises1, exercises2, exercises3]}/>
      <Total exer1 = {exercises1} exer2 = {exercises2} exer3 = {exercises3}/>
    </>
  )
  
}


const Header  = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (props) => {
  console.log("From Content:", props)
  return (
    <div>
      <Part part_name = {props.parts[0]} exer_count = {props.exercises[0]}/>
      <Part part_name = {props.parts[1]} exer_count = {props.exercises[1]}/>
      <Part part_name = {props.parts[2]} exer_count = {props.exercises[2]}/>
    </div>
  )
}

const Part = (props) => {
  console.log("From Part:", props)
  return (
    <p>
      {props.part_name} {props.exer_count}
    </p>
  )
}

const Total = (props) => {
  console.log("From Total:", props)
  return (
    <p>
      Number of exercises {props.exer1 + props.exer2 + props.exer3}
    </p>
  )
}


export default App