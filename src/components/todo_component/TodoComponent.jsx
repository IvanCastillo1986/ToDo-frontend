import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import IncompleteTodos from '../incomplete_todos/IncompleteTodos'
import CompleteTodos from '../complete_todos/CompleteTodos'
import './TodoComponent.scss'
const API = apiURL('todos')


export default function TodoComponent() {

    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])


    useEffect(() => {
        const completeTodos = []
        const incompleteTodos = []

        axios.get(`${API}/todos`)
        .then(res => {
            res.data.forEach(todo => {
                if (todo.complete === true) completeTodos.push(todo)
                else incompleteTodos.push(todo)
            })
            setCompleteTodos(completeTodos)
            setIncompleteTodos(incompleteTodos)
        }).catch(err => console.log(err))
    }, [])

    const toggleTodoComplete = (toggledTodo) => {
        if (toggledTodo.complete === true) {
            const newCompleteArr = completeTodos.filter(todo => todo.id !== toggledTodo.id)
            setCompleteTodos(newCompleteArr)
            setIncompleteTodos(incompleteTodos => [...incompleteTodos, toggledTodo])
        } else {
            const newIncompleteArr = incompleteTodos.filter(todo => todo.id !== toggledTodo.id)
            setIncompleteTodos(newIncompleteArr)
            setCompleteTodos(completeTodos => [...completeTodos, toggledTodo])
        }

        toggledTodo.complete = !toggledTodo.complete

        axios.put(`${API}/todos/${toggledTodo.id}`, toggledTodo)
        .then((res) => {
            // console.log(res.data)
        })
        .catch((err) => console.log(err))
    }


    return (
        <div className='TodoComponent'>
            <h2>Your Todos</h2>
            <IncompleteTodos 
                incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} 
                setCompleteTodos={setCompleteTodos}
                toggleTodoComplete={toggleTodoComplete}
            />

            {completeTodos.length > 0 &&
                <CompleteTodos 
                    completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} 
                    toggleTodoComplete={toggleTodoComplete}
                />
            }
        </div>
    )
}
