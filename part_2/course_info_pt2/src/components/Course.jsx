const Course = ({course}) => {
  return (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
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
  const formatted_courses = []
  props.parts.forEach(part => formatted_courses.push(<Part key={part.id} part_name = {part.name} exer_count = {part.exercises}/>))
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
  const total = props.parts.reduce(
    (s, p) => s + p.exercises,
    0)

    console.log("total", total)

  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  )
}

export default Course