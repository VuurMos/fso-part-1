const Header = (props) => {
  return(
    <div>
      {props.course}
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <div>
        {props.p1} {props.ex1}
      </div>
      <div>
        {props.p2} {props.ex2}
      </div>
      <div>
        {props.p3} {props.ex3}
      </div>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App