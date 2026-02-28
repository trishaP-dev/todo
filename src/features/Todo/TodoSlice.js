import {createSlice,nanoid} from '@reduxjs/toolkit';
import { act } from 'react';
//slice reducer ko hi bolte h

const loadTodos = () => {
  try {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    return []
  }
} 

const initialState ={//start me kaisa dikhega initial state array/obj ho skti
    // todos:[{id:1, text:"hello"}]//default
    // todos:[]
    todos: loadTodos()
}

// function sayHello(){
//     console.log("hello");
// }

export const todoSlice = createSlice({
    name:'todo',//slice ka naam 
    initialState,
    reducers:{ //isme property aur function aate h
        // addTodo:sayHello, alg se bna k aise refrence de sakte h call mat krna
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),//date.now() use kr re the unique id ke  liye pr ab nano id use krenge
                text:action.payload,//payload obj h usme id email kuch bhi aa skta h aur uski prop access kr skte
                completed:false
            }
            state.todos.push(todo)//state update ki
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
        },
        // updateTodo: (state, action) => {
        //     const todo = state.todos.find(
        //         (todo) => todo.id === action.payload.id
        //     )
        //     if (todo) {
        //         todo.text = action.payload.text
        //     }
        // }
        toggleTodo: (state, action) => {
        const todo = state.todos.find(
            (todo) => todo.id === action.payload
        )
        if (todo) {
            todo.completed = !todo.completed
        }
        }
    }
})

//context api me fn ki declaration kr re the defn nhi likh re the
// yha pr define bhi krte h

//todoSlice ko 2 part me export krte h
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions//1 sari functionality through which we always update states
export default todoSlice.reducer// store ko sare reducers k bare me btana