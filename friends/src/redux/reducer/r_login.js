// IMPORT ACTION TYPES
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/a_login.js'

// INITIAL STATE
const initialState = {
    is_LoggingIn: false,
    error: '',
    userJWT: undefined
}

// REDUCER
export const r_login = (state = initialState, action) => {
console.log(action.payload)
// -- //
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                userJWT: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state
            }
        // DEFAULT
        default:
            return state
    }
}