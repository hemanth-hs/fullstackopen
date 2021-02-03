import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Anecdote = (props) => {
  props.setMax(props.vote.indexOf(props.vote.reduce((a,b) => Math.max(a,b))))
  return (
    <div>
      <div>{props.anecdote}</div>
      <div>has {props.value} votes</div>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick()}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0) 
  const [vote, setVote] = useState(new Array(props.anecdotes.length).fill(0))
  const [max, setMax] = useState(0)
  
  const randomAnec = () => {
    const newSelected = Math.floor(Math.random()*props.anecdotes.length)
    setSelected(newSelected)
  }

  const incVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }

  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} value={vote[selected]} setMax={setMax} vote={vote} />
      <Button handleClick={incVote} text="vote" />
      <Button handleClick={randomAnec} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={props.anecdotes[max]} value={vote[max]} setMax={setMax} vote={vote} />
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);

