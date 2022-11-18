const Header = (props) => {
  return(
    <div>
      {props.course}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.n1} exercise={props.ex1} />
      <Part part={props.n2} exercise={props.ex2} />
      <Part part={props.n3} exercise={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      Number of exercises {props.total}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content n1={part1.name} ex1={part1.exercises} n2={part2.name} ex2={part2.exercises} n3={part3.name} ex3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App