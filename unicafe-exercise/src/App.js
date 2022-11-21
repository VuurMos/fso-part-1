import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Display = ({ text, value, endText }) => {
  return(
    <div>{text} {value} {endText}</div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  let avg = ((1 * good) + (0 * neutral) + (-1 * bad)) / total
  let pos = good / (good + neutral + bad)

  if (total != 0){
    return(
      <div>
        <h1>statistics</h1>
        <Display text="good" value={good} />
        <Display text="neutral" value={neutral} />
        <Display text="bad" value={bad} />
        <Display text="total" value={total} />
        <Display text="average" value={avg} />
        <Display text="positive" value={pos} endText="%" />
      </div>
    )
  }
  else {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App