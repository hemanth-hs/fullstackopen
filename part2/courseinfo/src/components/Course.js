import React from 'react'

const Header = ({ course }) => {
    return (
        <div>
            <h2>{ course.name }</h2>
        </div>

    )
}

const Total = ({ course }) => {
    const sum = course.reduce((sum, part) =>{return sum+part.exercises}, 0)
    return (
        <div>
            <b>Total of sum {sum} exercises.</b>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.props.name} {props.props.exercises}</p>
        </div>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.map((part, index) => <Part key={index} props={part} />)}
        </div>
    )
}

export default function Course({course}) {
    return (
        <div>
            <Header course={course} />
            <Content course={course.parts} />
            <Total course={course.parts} />
        </div>
    )
}