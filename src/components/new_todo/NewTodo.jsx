import React, { useState } from 'react'



export default function NewTodo(addTodo) {



    return (
        <>
            <form className='NewTodo' onSubmit={addTodo}>
                <label htmlFor="title">New Task:</label>
                <input type="text" placeholder='New Task' id='message' value={game.title} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>

            <button onClick={addTodo}>Add New Todo</button>
        </>
    )
}
