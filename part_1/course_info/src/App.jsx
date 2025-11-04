  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
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
  const formatted_courses = []
  props.parts.forEach(part => formatted_courses.push(<Part part_name = {part.name} exer_count = {part.exercises}/>))
  return (
    <div>
    { formatted_courses }
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
  let total = 0
  props.parts.forEach(part => total += part.exercises)

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}


export default App