import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/TodoSlice'
import themeReducer from '../features/Theme/ThemeSlice'

export const store=configureStore({ //ye ek obj hi leta h apne undr
    reducer: {
    todo: todoReducer,
    theme: themeReducer
  }
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(
    "todos",
    JSON.stringify(state.todo.todos)
  )
})