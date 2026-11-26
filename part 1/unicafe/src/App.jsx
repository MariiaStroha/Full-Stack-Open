import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({values}) => {
  if(values.good === 0 && values.neutral === 0 && values.bad === 0)
    return(<p>No feedback given</p>)

  // Get the total number of collected feedback
  const total = values.good + values.neutral + values.bad

  // This function calculates the average feedback(good = 1, neutral = 0, bad = -1)
  const calculateAverage = (values.good - values.bad) / total

  // Find the percentage of good reviews
  const positivePercentage = (values.good / total) * 100
                                                                        
  return(
    <>
      <table>
        <StatisticLine text='Good' value={values.good} />
        <StatisticLine text='Neutral' value={values.neutral} />
        <StatisticLine text='Bad' value={values.bad} />
        <StatisticLine text='All' value={total} />
        <StatisticLine text='Average' value={calculateAverage} />
        <StatisticLine text='Positive' value={positivePercentage} />
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // 'A function that returns a function'(handles clicking each of three review buttons)
  const handleReview = (number, setSomething) => {
    const handler = () => setSomething(number + 1)

    return handler
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text='good' onClick={handleReview(good, setGood)} />
      <Button text='neutral' onClick={(handleReview(neutral, setNeutral))} />
      <Button text='bad' onClick={handleReview(bad, setBad)} />
      <h1>Statistics</h1>
      <Statistics values={{good: good, neutral: neutral, bad: bad}} />
    </>
  )
}

export default App