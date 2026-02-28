import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/TodoSlice'

function AddTodo(){
    const [input,setInput]=useState("")
    const dispatch = useDispatch()

    const addTodoHandler= (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return(
        <form onSubmit={addTodoHandler} className=" w-full flex gap-3 mt-5 ">
      <input
        type="text"
        className="flex-1 bg-gray-200 dark:bg-gray-800 dark:text-white
           border border-gray-700 dark:border-gray-300
           px-3 py-2 rounded transition-colors duration-300"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-white text-indigo-500
           dark:bg-indigo-500 dark:text-white
           transition-colors duration-300"
      >
        Add Todo
      </button>
    </form>
    )
}

export default AddTodo