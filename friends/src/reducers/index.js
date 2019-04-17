// REDUX
    import { combineReducers } from 'redux'

// REDUCERS
    import { login_reducer } from './login'
    import { friends_reducer } from './friendsList'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

export const rootReducer = combineReducers({ 
    // login: login_reducer
    login_reducer,
    friends_reducer
})

// export const rootReducer = login_reducer