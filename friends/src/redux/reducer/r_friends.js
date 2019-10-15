// IMPORT ACTION CREATORS
import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
} from '../actions/a_getFriends.js'

// INITIAL STATE
const initialState = {
    is_fetchingFriends: false,
    error: '',
    friendsData: undefined
}

// REDUCER
export const r_friends = (state = initialState, action) => {
console.log(action.payload)
// -- //
    switch(action.type) {
        case GET_FRIENDS_START: 
            return {
                ...state,
                is_fetchingFriends: true,
            }
        case GET_FRIENDS_SUCCESS: 
            return {
                ...state,
                is_fetchingFriends: false,
                friendsData: action.payload
            }
        case GET_FRIENDS_FAILURE: 
            return {
                ...state,
                is_fetchingFriends: false,
                error: action.payload.data
            }
        default:
            return state
    }
}