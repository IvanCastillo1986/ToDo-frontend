import React from 'react'
import Todo from '../todo/Todo'
import './CompleteTodos.scss'


export default function CompleteToDos({ todos, updateCompletion, deleteTodo }) {



    return (
        <div className='CompleteTodos'>
            <h2>Complete Todos</h2>
            <ul className='IncompleteTodos'>
                {todos.length &&
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} updateCompletion={updateCompletion} />
                })}
            </ul>
        </div>
    )
}
