import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good+1)} text='good'>good</button>
      <button onClick={() => setNeutral(neutral+1)} text='neutral'>neutral</button>
      <button onClick={() => setBad(bad+1)} text='bad'>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 

