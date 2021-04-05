import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import coursesReducer from './coursesReducer'

export default combineReducers({
    todos: todosReducer,
    courses: coursesReducer,
})
