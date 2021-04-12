import { SET_MENU } from './menuActionTypes'

export const setMenu = ({ plans, plans_equivalent }) => ({
    type: SET_MENU,
    payload: { plans, plans_equivalent },
})
