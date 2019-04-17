// ACTION TYPES
    import {
        LOGIN_ATTEMPT,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
    } from '../actions/login'

// IMPORT INITIAL STATE
    // import { initialState } from './initialState'



// REDUCER
    // initial state
    const initialState = {
        is_LoggingIn: false,
        loggedIn: true,
        err: ''
    }

    // export const login_reducer = (state, action) => {
    export const login_reducer = (state = initialState, action) => {
        switch(action.type) {
            case LOGIN_ATTEMPT:
                console.log('login_reducer ACTION: ', action)
                console.log('login_reducer ACTION PAYLOAD: ', action.payload)
                return {
                    ...state,
                    is_LoggingIn: true,
                    loggedIn: false,
                    err: ''
                }
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    is_LoggingIn: false,
                    loggedIn: true,
                    err: ''
                }
            case LOGIN_FAILURE:
                return {
                    ...state,
                    is_LoggingIn: false,
                    loggedIn: false,
                    err: 'LOGIN FAILURE - please check your username & password'
                }
            default:
                return state;
        }
    }