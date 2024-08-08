import React from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import './Todo.scss'
const API = apiURL('todos')


export default function Todo({ todo, incompleteTodos, setIncompleteTodos, completeTodos, setCompleteTodos, updateTodo }) {

    const deleteTodo = (deletedTodo) => {

        const incompleteTodosPrev = incompleteTodos
        const completeTodosPrev = completeTodos

        if (deletedTodo.complete === true) {
            const filteredTodos = completeTodosPrev.filter(todo => todo.id !== deletedTodo.id)
            setCompleteTodos(filteredTodos)
        } else {
            const filteredTodos = incompleteTodosPrev.filter(todo => todo.id !== deletedTodo.id)
            setIncompleteTodos(filteredTodos)
        }

        axios.delete(`${API}/todos/${deletedTodo.id}`)
        .then(res => {
            console.log('deletedTodo:', res.data)
        })
        .catch(err => console.log(err))
    }
    

    return (
        <li className='Todo'>
            {todo.complete
                ?
                <button className='Todo__checkBtn' onClick={() => updateTodo(todo)}>Restore</button>
                :
                <button className='Todo__checkBtn' onClick={() => updateTodo(todo)}>Done</button>
            }
            <span className='Todo__message'>{todo.todo_message}</span>
            <button className='Todo__deleteBtn' onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
    )
}
