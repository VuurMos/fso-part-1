import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Display = ({ state }) => {
  return(
    <div>{state}</div>
  )
}

const App = () => {
  // feedback states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // event handlers
  const addGoodFeedback = () => setGood(good + 1)
  const addNeutralFeedback = () => setNeutral(neutral + 1)
  const addBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGoodFeedback} text='good' />
      <Button onClick={addNeutralFeedback} text='neutral' />
      <Button onClick={addBadFeedback} text='bad' />

      <h1>statistics</h1>
      <Display state={good} />
      <Display state={neutral} />
      <Display state={bad} />
    </div>
  )
}

export default App