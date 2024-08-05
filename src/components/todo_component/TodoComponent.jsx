import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import IncompleteTodos from '../incomplete_todos/IncompleteTodos'
import CompleteTodos from '../complete_todos/CompleteTodos'
import './TodoComponent.scss'



export default function TodoComponent() {

    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])
    const API = apiURL('todos')


    useEffect(() => {
        axios.get(`${API}/todos`)
        .then(res => {
            const unfinishedTodos = []
            const finishedTodos = []
            res.data.forEach(todo => {
                if (todo.completed) finishedTodos.push(todo)
                else unfinishedTodos.push(todo)
            })

            setIncompleteTodos(unfinishedTodos)
            setCompleteTodos(finishedTodos)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className='TodoComponent'>
            <h2>Your Todos</h2>
            {incompleteTodos.length &&
            <IncompleteTodos todos={incompleteTodos}/>
            }

            <CompleteTodos todos={completeTodos} />
        </div>
    )
}
