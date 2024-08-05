import React from 'react'
import Todo from '../todo/Todo'
import './IncompleteTodos.scss'



export default function IncompleteTodos({ todos, updateCompletion, deleteTodo }) {


    return (
        <ul className='IncompleteTodos'>
            {todos.length &&
            todos.map(todo => {
                return <Todo key={todo.id} todo={todo} updateCompletion={updateCompletion} deleteTodo={deleteTodo} />
            })}
        </ul>
    )
}
