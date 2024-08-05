import React, { useState, useEffect } from 'react'
import ToDo from '../todo/ToDo'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import './ToDoList.scss'



export default function ToDoList() {

    const [todosList, setTodosList] = useState()
    const API = apiURL('todos')
    console.log(API)


    // make ToDos API call in this useEffect, then render each ToDo from back-end
    useEffect(() => {
        axios.get(`${API}/todos`)
        .then(res => {
            console.log(res)
            setTodosList(res.data)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className='ToDoList'>
            ToDoList
            <ul>
                {todosList.length &&
                todosList.map(todo => {
                    return <ToDo key={todo.id} todo={todo} />
                })}
            </ul>
        </div>
    )
}
