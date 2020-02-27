import { actionTypes } from './actionTypes'

const defaultState = {
    errors: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.DEPT_CREATE_SUCCEEDED:
            console.log(11111, action)
            return {
                ...state,
            }
    
        default:
            return state
    }
}