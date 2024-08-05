import React from 'react'
import Todo from '../todo/Todo'
import './IncompleteTodos.scss'



export default function IncompleteTodos({ todos }) {


    return (
        <ul className='IncompleteTodos'>
            {todos.length &&
            todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </ul>
    )
}
