import React from 'react'

const Header = ({ course }) => {
    return (
        <div>
            <h1>{ course.name }</h1>
        </div>

    )
}


const Part = (props) => {
    return (
        <div>
            {console.log(props.props)}
            <li>{props.props.name} {props.props.exercises}</li>
        </div>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            <ul>
                {course.map((part, index) => <Part key={index} props={part} />)}
            </ul>
        </div>
    )
}

export default function Course({course}) {
    return (
        <div>
            <Header course={course} />
            <Content course={course.parts} />
        </div>
    )
}