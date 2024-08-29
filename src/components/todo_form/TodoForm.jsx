import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'

import './TodoForm.scss'

const API = apiURL('todos')



export default function TodoForm({ updatedTodo, toggleEditForm, incompleteTodos, setIncompleteTodos, method }) {

    const [formTodo, setFormTodo] = useState((updatedTodo) => {
        return (
        updatedTodo == null
        ?
        {todo_message: '', complete: false}
        :
        updatedTodo
        )
    })

    useEffect(() => {
        if (method === 'put') {
            setFormTodo({...updatedTodo})
        }
    }, [])

    // created for scale, in case I end up adding other input for todo
    const handleChange = (e) => {
        const {id, value} = e.target
        setFormTodo({...formTodo, [id]: value})
    }


    // updateBtn
    const handleUpdate = (e) => {
        e.preventDefault()

        const updatedTodosList = incompleteTodos
        // replace updatedTodo with res.data, then setIncompleteTodos with updatedTodo in place within array
        const todoIdx = updatedTodosList.findIndex(arrTodo => arrTodo.id === formTodo.id)

        axios.put(`${API}/todos/${formTodo.id}`, formTodo)
        .then((res) => {
            // console.log(res.data)
            updatedTodosList[todoIdx] = res.data

            setIncompleteTodos([...updatedTodosList])
        }).catch(err => console.log(err))

        toggleEditForm()
    }

    // addBtn
    const handleCreate = (e) => {
        e.preventDefault()

        const newTodosList = [...incompleteTodos]

        try {
            axios.post(`${API}/todos`, formTodo)
            .then((res) => {
                // console.log(res.data)
                setFormTodo({
                    todo_message: '',
                    complete: false
                })

                newTodosList.push(res.data)
                setIncompleteTodos(newTodosList)
            }).catch(err => {
                console.log(err)
            })

        } catch (err) {
            console.log('Error adding game:', err)
        }
    }


    return (
        <form
            onSubmit={method === 'post' ? handleCreate : handleUpdate}
        >
            <input 
                type="text" id='todo_message'
                value={formTodo?.todo_message}
                onChange={handleChange}
            />
            
            <button 
                type="submit"
                className={method === 'post' ? 'Todo__addBtn' : 'Todo__updateBtn'}
            >
                {method === 'post' ? 'Add Todo' : 'Update'}
            </button>
        </form>
    )
}