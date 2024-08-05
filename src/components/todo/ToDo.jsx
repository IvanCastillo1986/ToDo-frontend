import React, { useState } from 'react'
import axios from 'axios'
import './Todo.scss'



export default function Todo({ todo }) {

    console.log(todo)

    const updateCompletion = (complete) => {
        // this will make put call and update the completed property
        if (complete) {
            
        }
    }


    return (
        <li className='Todo'>
            {todo.completed
                ?
                <button className='Todo__checkBtn'>Restore</button>
                :
                <button className='Todo__checkBtn'>Done</button>
            }
            <span className='Todo__message'>{todo.todo_message}</span>
            <button className='Todo__deleteBtn'>Delete</button>
        </li>
    )
}
