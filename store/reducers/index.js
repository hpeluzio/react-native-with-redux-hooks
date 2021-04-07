import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import coursesReducer from './coursesReducer'
import mealsPlansReducer from './mealsPlansReducer'

export default combineReducers({
    todos: todosReducer,
    courses: coursesReducer,
    mealsplans: mealsPlansReducer,
})
