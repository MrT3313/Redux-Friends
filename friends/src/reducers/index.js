// REDUX
    import { combineReducers } from 'redux'

// REDUCERS
    import { login_reducer } from './login'
    import { friends_reducer } from './friendsList'
    import { addFriend_reducer } from './addFriend'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

export const rootReducer = combineReducers({ 
    // login: login_reducer
    login_reducer,
    friends_reducer,
    addFriend_reducer
})

// export const rootReducer = login_reducer