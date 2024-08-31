import React from 'react'
import Todo from '../todo/Todo'
import './CompleteTodos.scss'


export default function CompleteToDos({ completeTodos, setCompleteTodos, toggleTodoComplete }) {


    return (
        <div className='CompleteTodos'>
            <h2>Complete Todos</h2>
            <ul>
                {completeTodos.length &&
                completeTodos.map(todo => {
                    return <Todo 
                        key={todo.id} todo={todo} updatedTodo={null}
                        completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} 
                        toggleTodoComplete={toggleTodoComplete}
                    />
                })}
            </ul>
        </div>
    )
}
