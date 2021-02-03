import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Statistics = (props) => {
  if (props.props.good === 0 && props.props.bad === 0 && props.props.neutral === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={props.props.good} />
          <Statistic text="neutral" value={props.props.neutral} />
          <Statistic text="bad" value={props.props.bad} />
          <Statistic text="all" value={props.props.all} />
          <Statistic text="average" value={props.props.average} />
          <Statistic text="positive" value={props.props.positive} /> 
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    
  )
}

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick()}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = () => {
    setGood(good+1)
  }

  const addToBad = () => {
    setBad(bad+1)
  }

  const addToNeutral = () => {
    setNeutral(neutral+1)
  }

  const all = good+bad+neutral
  const average = 100*(good-bad)/all
  const positive = 100*good / all

  
  const stat = {
    'good': good,
    'bad': bad,
    'neutral': neutral,
    'average': average,
    'all': all,
    'positive': positive
  }
  
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={addToGood} />
      <Button text="neutral" handleClick={addToNeutral} />
      <Button text="bad" handleClick={addToBad} />
      <h1>Statistics</h1>
      <Statistics props={stat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 

