import React, { useState, useEffect } from 'react'
import ToDo from '../todo/ToDo'
import './ToDoList.scss'



export default function ToDoList() {

    const [todosList, setTodosList] = useState()

    return (
        <div className='ToDoList'>
            ToDo Component
        </div>
    )
}
