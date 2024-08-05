import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import IncompleteTodos from '../incomplete_todos/IncompleteTodos'
import CompleteTodos from '../complete_todos/CompleteTodos'
import './TodoComponent.scss'
import CompleteToDos from '../complete_todos/CompleteTodos'



export default function TodoComponent() {

    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])
    const API = apiURL('todos')


    const updateTodos = (todos) => {
        const finishedTodos = []
        const unfinishedTodos = []

        // better for Time Complexity than filtering two separate arrays
        todos.forEach(todo => {
            if (todo.complete) finishedTodos.push(todo)
            else unfinishedTodos.push(todo)
        })

        setCompleteTodos(finishedTodos)
        setIncompleteTodos(unfinishedTodos)
    }

    useEffect(() => {
        axios.get(`${API}/todos`)
        .then(res => {
            updateTodos(res.data)
        }).catch(err => console.log(err))
    }, [])


    
    const filterTodos = (filteredTodo) => {
        const finishedTodos = [...completeTodos]
        const unfinishedTodos = [...incompleteTodos]
        const idx = finishedTodos.findIndex(todo => todo.id === filteredTodo.id)

        if (idx > -1) { // filteredTodo{} was found in finishedTodos[]
            // remove filteredTodo from this array, and add to the other
            finishedTodos.splice(idx, 1)
            unfinishedTodos.unshift(filteredTodo)
        } else {
            unfinishedTodos.splice(idx, 1)
            finishedTodos.unshift(filteredTodo)
        }

        setCompleteTodos(() => finishedTodos)
        setIncompleteTodos(() => unfinishedTodos)
    }

    const updateCompletion = (updatedTodo) => {
        updatedTodo.complete = !updatedTodo.complete
        // this updates state for the todos
        filterTodos(updatedTodo)

        axios.put(`${API}/todos/${updatedTodo.id}`, updatedTodo)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

    const deleteTodo = (todo) => {
        axios.delete(`${API}/todos/${todo.id}`)
    }

    const addTodo = (e, todo) => {
        e.preventDefault()

        try {
            axios.post(`${API}/todos`, todo)
            .then(() => {
                setIncompleteTodos(prevTodos => [...prevTodos, todo])
            }).catch(err => {
                console.log(err)
            })

        } catch (err) {
            console.log('Error adding game:', err)
        }
    }


    return (
        <div className='TodoComponent'>
            <h2>Your Todos</h2>
            <button>Add New Todo</button>
            {incompleteTodos.length &&
            <IncompleteTodos todos={incompleteTodos} updateCompletion={updateCompletion} deleteTodo={deleteTodo} />
            }

            <CompleteTodos todos={completeTodos} updateCompletion={updateCompletion} deleteTodo={deleteTodo} />
        </div>
    )
}
