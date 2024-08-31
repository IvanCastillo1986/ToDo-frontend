import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'

import TodoForm from '../todo_form/TodoForm'
import './Todo.scss'
const API = apiURL('todos')


export default function Todo({ 
    todo, incompleteTodos, setIncompleteTodos, completeTodos, setCompleteTodos, toggleTodoComplete
}) {

    const [editId, setEditId] = useState(null)

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
            // console.log('deletedTodo:', res.data)
        })
        .catch(err => console.log(err))
    }


    const toggleEditForm = (id) => {
        // will toggle the two elements onClick, between todo message and todo form
        if (!todo.complete) {
            id ? setEditId(todo.id) : setEditId(null)
        }
    }
    

    return (
        <div className='Todo'>
            { editId === todo.id // this means we've clicked to toggle TodoForm
            ?
            <>
                {/* <input type="text" id='todo_message' value={updatedTodo.todo_message} onChange={handleUpdateChange} />
                <button className='Todo__updateBtn' onClick={() => handleUpdate(updatedTodo)}>Update</button> */}
                <TodoForm 
                    method={'put'} updatedTodo={todo}
                    incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos}
                    toggleEditForm={toggleEditForm} 
                />
            </>
            :
            <>
                <input className='Todo__checkbox' type="checkbox" checked={todo.complete} onChange={() => toggleTodoComplete(todo)} />
                <span onClick={() => toggleEditForm(todo.id)} className='Todo__message'>{todo.todo_message}</span>
                <button className='Todo__deleteBtn' onClick={() => deleteTodo(todo)}>Delete</button>
            </>
            }
        </div>
    )
}

// Todo: replace current elements with conditional elements within <></> React elements 