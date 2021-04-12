import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import coursesReducer from './coursesReducer'
import mealsPlansReducer from './mealsPlansReducer'
import menuReducer from './menuReducer'

export default combineReducers({
    todos: todosReducer,
    courses: coursesReducer,
    mealsplans: mealsPlansReducer,
    menu: menuReducer,
})
