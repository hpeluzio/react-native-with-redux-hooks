import { ADD_COURSE } from '../actions/courses/coursesActionTypes'

// const initialState = {
//     data: ['React NAtive', 'ReactJS'],
// }

const initialState = {
    data: [
        {
            id: 1,
            title: 'Iniciando com RN Redux',
            lessons: [
                { id: 1, title: 'Primeira Aula' },
                { id: 2, title: 'Segunda aula' },
            ],
        },
        {
            id: 2,
            title: 'Continuando com RN Redux',
            lessons: [
                { id: 1, title: 'Terceira Aula' },
                { id: 2, title: 'Quarta aula' },
            ],
        },
    ],
}

export default function courses(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE:
            return { ...state, data: [...state.data, action.payload] }
        default:
            return state
    }
}
