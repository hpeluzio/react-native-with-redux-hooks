import { ADD_MEALPLAN } from '../actions/mealsPlans/mealsPlansActionsTypes'

import { data } from '../data'

// console.log('data: ', data)

const initialState = { data: data }

export default function mealsPlansReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MEALPLAN:
            return [...state, { id: Math.random(), text: action.payload.text }]
        default:
            return state
    }
}
