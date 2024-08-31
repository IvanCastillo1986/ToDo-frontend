import React from 'react'

import Todo from '../todo/Todo'
import TodoForm from '../todo_form/TodoForm'
import './IncompleteTodos.scss'


export default function IncompleteTodos({ incompleteTodos, setIncompleteTodos, toggleTodoComplete }) {


    return (
        <div className='IncompleteTodos'>
            <div className='IncompleteTodos__new-todo'>
                <TodoForm 
                    method={'post'} updatedTodo={null}
                    incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos}
                />
            </div>
            <div>
                {incompleteTodos.length > 0 &&
                incompleteTodos.map(todo => {
                    return <Todo 
                    key={todo.id} todo={todo} updatedTodo={null}
                    incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} 
                    toggleTodoComplete={toggleTodoComplete} 
                    />
                })}
            </div>
        </div>
    )
}
