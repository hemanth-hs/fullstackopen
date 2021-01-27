import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
 return (
   <p>
     {props.part} {props.excercise}
   </p>
 ) 
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} excercise={props.excercise1}/>
      <Part part={props.part2} excercise={props.excercise2}/>
      <Part part={props.part3} excercise={props.excercise3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of excercise {props.excercise1 + props.excercise2 + props.excercise3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application developement'
  const part1 = 'Fundamentals of React'
  const excercise1 = 10
  const part2 = 'Using props to pass data'
  const excercise2 = 7
  const part3 = 'State of a Component'
  const excercise3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}
      excercise1={excercise1} excercise2={excercise2} excercise3={excercise3} />
      <Total excercise1={excercise1} excercise2={excercise2} excercise3={excercise3}/>
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
