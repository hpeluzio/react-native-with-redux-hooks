import { ADD_TODO } from '../actions/todos/todosActionsTypes'

const initialState = []

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { id: Math.random(), text: action.payload.text }]
        default:
            return state
    }
}
