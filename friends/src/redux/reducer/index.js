// IMPORTS
import {combineReducers} from 'redux'

// REDUCERS
    import {r_login as LOGIN} from './r_login.js'
    import {r_friends as FRIENDS} from './r_friends'

// COMBINE REDUCERS
export const rootReducer = combineReducers({
    LOGIN,
    FRIENDS
})