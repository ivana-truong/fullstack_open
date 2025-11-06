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


// // App from the text
// import { useState } from 'react'


// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setLeft(left + 1)
//     setAll(allClicks.concat("L"))
//     setTotal(total + 1)
//   }

//   const handleRightClick = () => {
//     setRight(right + 1)
//     setAll(allClicks.concat("R"))
//     setTotal(total + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} title="left"/>
//       <Button onClick={handleRightClick} title="right"/>
//       {right}
//       <History allClicks={allClicks}/>
//     </div>
//   )
// }

// const Display = ({counter}) => <div>{counter}</div>
// const Button = ({onClick, title}) => <button onClick={onClick}>{ title }</button>

// const History = ({allClicks}) => {
//   if (allClicks.length == 0) {
//     return (
//       <div>
//         the app is used by pressing buttons
//       </div>
//     )
//   }
//   return (
//     <div>button press history: {allClicks.join(' ')}</div>
//   )
// }

// export default App