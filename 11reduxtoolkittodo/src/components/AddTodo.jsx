import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if (!input.trim()) return

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex justify-center items-center gap-3 mt-12"
        >
            <input
                type="text"
                className="w-[370px] h-12 bg-gray-800 rounded px-4 text-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="h-12 px-7 text-lg text-white bg-indigo-500 hover:bg-indigo-600 rounded transition"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo