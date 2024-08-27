import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'

import TodoForm from '../todo_form/TodoForm'
import './Todo.scss'
const API = apiURL('todos')


export default function Todo({ 
    todo, incompleteTodos, setIncompleteTodos, completeTodos, setCompleteTodos, toggleTodoComplete, handleChange
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
        // will toggle the two elements, the <div><input><update_btn> and <div><span><delete_btn>
        id ? setEditId(todo.id) : setEditId(null)
    }
    

    return (
        <div className='Todo'>
            { editId === todo.id 
            ?
            <>
                {/* <input type="text" id='todo_message' value={updatedTodo.todo_message} onChange={handleUpdateChange} />
                <button className='Todo__updateBtn' onClick={() => handleUpdate(updatedTodo)}>Update</button> */}
                <TodoForm 
                    todo={todo}
                    incompleteTodos={incompleteTodos} toggleEditForm={toggleEditForm} 
                    setCompleteTodos={setCompleteTodos} setIncompleteTodos={setIncompleteTodos}
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