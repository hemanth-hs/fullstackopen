import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Statistics = (props) => {
  if (props.props.all === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {props.props.good}</p>
      <p>neutral {props.props.neutral}</p>
      <p>bad {props.props.bad}</p>
      <p>all {props.props.all}</p>
      <p>average {props.props.average}</p>
      <p>positive {props.props.positive}</p>
    </div>
  )
  

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
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
      <h2>give feedback</h2>
      <button onClick={() => setGood(good+1)} text='good'>good</button>
      <button onClick={() => setNeutral(neutral+1)} text='neutral'>neutral</button>
      <button onClick={() => setBad(bad+1)} text='bad'>bad</button>
      <Statistics props={stat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 

