import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'

const API = apiURL('todos')


// App ->
//     TodoComponent ->  incompleteTodos[], completeTodos[]  |  
//         IncompleteTodos ->  incompleteTodos, setIncompleteTodos, toggleTodoComplete  |  
//             Todo ->  
//         CompleteTodos ->
//             Todo
export default function TodoForm({ todo, toggleEditForm, incompleteTodos, setIncompleteTodos }) {

    const [updatedTodo, setUpdatedTodo] = useState({...todo})

    // updateBtn
    const handleUpdate = (e) => {
        e.preventDefault()

        const updatedTodosList = incompleteTodos
        // replace updatedTodo with res.data, then setIncompleteTodos with updatedTodo in place within array
        const todoIdx = updatedTodosList.findIndex(arrTodo => arrTodo.id === todo.id)


        axios.put(`${API}/todos/${updatedTodo.id}`, updatedTodo)
        .then((res) => {
            console.log(res.data)
            updatedTodosList[todoIdx] = res.data

            setIncompleteTodos(prevIncompleteTodos => updatedTodosList)
        }).catch(err => console.log(err))

        toggleEditForm()
    }
    const handleUpdateChange = (e) => {
        const {id, value} = e.target
        setUpdatedTodo({...updatedTodo, [id]: value})
    }



    return (
        <form 
            // className={method === 'post' ? 'Todo__addBtn' : 'Todo__updateBtn'} 
            // onSubmit={method === 'post' ? addGame : editGame}
            onSubmit={handleUpdate}
        >
            {/* <input type="text" placeholder='Title' id='title' value={game.title} onChange={handleChange} required /> */}
            <input 
                type="text" id='todo_message' 
                value={updatedTodo.todo_message} 
                onChange={handleUpdateChange} 
            />
            
            <button 
                type="submit" className='Todo__updateBtn' 
            >
                Update
            </button>
        </form>
    )
}