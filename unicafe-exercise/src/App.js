import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const StatisticsLine = ({ text, value, endText }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{endText}</td>
    </tr>
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
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="total" value={total} />
            <StatisticsLine text="average" value={avg} />
            <StatisticsLine text="positive" value={pos} endText="%" />
          </tbody>
        </table>
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