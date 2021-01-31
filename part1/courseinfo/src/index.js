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
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  } 
  const part2 = {
    name: "Using props to pass data",
    excercises: 7
  }
  const part3 = {
    name: 'State of a Component',
    excercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name}
      excercise1={part1.excercises} excercise2={part2.excercises} excercise3={part3.excercises} />
      <Total excercise1={part1.excercises} excercise2={part2.excercises} excercise3={part3.excercises}/>
      
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
