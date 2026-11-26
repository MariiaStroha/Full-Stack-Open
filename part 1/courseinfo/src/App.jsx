const Header = (props) => {
  return(
    <p>{props.course}</p>
  )
}

const Part = (props) => {
  return(
    <p>{props.part}: {props.exercises} exercises</p>
  )
}

const Content = ({parts}) => {
  const toRender = parts.map(part => <Part part={part.name} exercises={part.exercises}/>)
  return toRender
}

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises)
  
  const length = exercises.length

  const calculateSum = (length, array) => {
    let sum = 0
    for (let i = 0; i < length; i++) {
      if (i === 0){
        sum = array[0]
        console.log(sum)
      }
      else{
        sum = sum + array[i]
        console.log(sum)
      }
    }
    return sum
  }
  return(
    <p>Total number of exercises: {calculateSum(length, exercises)} </p>
  )
}

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
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App