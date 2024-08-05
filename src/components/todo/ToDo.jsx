import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import './Todo.scss'



export default function Todo({ todo, updateCompletion, deleteTodo }) {

    
    const API = apiURL('todos')
    // console.log(todo)
    

    return (
        <li className='Todo'>
            {todo.complete
                ?
                <button className='Todo__checkBtn' onClick={() => updateCompletion(todo)}>Restore</button>
                :
                <button className='Todo__checkBtn' onClick={() => updateCompletion(todo)}>Done</button>
            }
            <span className='Todo__message'>{todo.todo_message}</span>
            <button className='Todo__deleteBtn' onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
    )
}
