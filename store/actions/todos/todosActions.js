import { ADD_TODO } from './todosActionsTypes'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
})
