// REDUX
    import { combineReducers } from 'redux'

// REDUCERS
    import { login_reducer } from './login'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

export const rootReducer = combineReducers({ 
    // login: login_reducer
    login_reducer
})

// export const rootReducer = login_reducer