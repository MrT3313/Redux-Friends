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
                ...state,
                is_LoggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                is_LoggingIn: false,
                userJWT: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                is_LoggingIn: false,
                error: action.payload.data
            }
        // DEFAULT
        default:
            return state
    }
}