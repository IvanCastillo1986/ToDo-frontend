import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import Todo from '../todo/Todo'
import './IncompleteTodos.scss'
const API = apiURL('todos')


export default function IncompleteTodos({ incompleteTodos, setIncompleteTodos, setCompleteTodos, deleteTodo, updateTodo }) {

    const [newTodo, setNewTodo] = useState({
        todo_message: '',
        complete: false
    })

    // created for scale, in case I end up adding other input for todo
    const handleChange = (e) => {
        const {id, value} = e.target
        setNewTodo({...newTodo, [id]: value})
    }

    const addTodo = (e, todo) => {
        e.preventDefault()

        try {
            axios.post(`${API}/todos`, todo)
            .then((res) => {
                console.log(res.data)

                setNewTodo({
                    todo_message: '',
                    complete: false
                })

                setIncompleteTodos(prevTodos => [...prevTodos, res.data])
            }).catch(err => {
                console.log(err)
            })

        } catch (err) {
            console.log('Error adding game:', err)
        }
    }


    return (
        <div className='IncompleteTodos'>
            <div className='IncompleteTodos__new-todo'>
                <form onSubmit={(e) => addTodo(e, newTodo)}>
                    <input type="text" placeholder='What needs to get done?' id='todo_message' value={newTodo.todo_message} onChange={handleChange} />
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
            <ul>
                {incompleteTodos.length &&
                incompleteTodos.map(todo => {
                    return <Todo key={todo.id} todo={todo} incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} updateTodo={updateTodo} />
                })}
            </ul>
        </div>
    )
}
