import { SET_MENU } from '../actions/menu/menuActionTypes'

const initialState = {
    menus: [],
}

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MENU:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}
