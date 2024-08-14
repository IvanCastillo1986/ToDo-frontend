import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import IncompleteTodos from '../incomplete_todos/IncompleteTodos'
import CompleteTodos from '../complete_todos/CompleteTodos'
import './TodoComponent.scss'
const API = apiURL('todos')


export default function TodoComponent() {

    const [completeTodos, setCompleteTodos] = useState([])
    const [incompleteTodos, setIncompleteTodos] = useState([])


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

    const updateTodo = (updatedTodo) => {
        if (updatedTodo.complete === true) {
            const newCompleteArr = completeTodos.filter(todo => todo.id !== updatedTodo.id)
            setCompleteTodos(newCompleteArr)
            setIncompleteTodos(incompleteTodos => [...incompleteTodos, updatedTodo])
        } else {
            const newIncompleteArr = incompleteTodos.filter(todo => todo.id !== updatedTodo.id)
            setIncompleteTodos(newIncompleteArr)
            setCompleteTodos(completeTodos => [...completeTodos, updatedTodo])
        }

        updatedTodo.complete = !updatedTodo.complete

        axios.put(`${API}/todos/${updatedTodo.id}`, updatedTodo)
        .then((res) => {
            // console.log(res.data)
        })
        .catch((err) => console.log(err))
    }


    return (
        <div className='TodoComponent'>
            <h2>Your Todos</h2>
            {incompleteTodos.length > 0 &&
            <IncompleteTodos 
                incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} 
                setCompleteTodos={setCompleteTodos}
                updateTodo={updateTodo}
            />
            }

            {completeTodos.length > 0 &&
                <CompleteTodos 
                    completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} 
                    updateTodo={updateTodo}
                />
            }
        </div>
    )
}
