import { ADD_TODO } from './todosActionTypes'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
})
