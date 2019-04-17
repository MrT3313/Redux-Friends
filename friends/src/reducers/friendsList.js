// ACTION TYPES
    import {
        FRIENDS_FETCH_START,
        FRIENDS_FETCH_SUCCESS,
        FRIENDS_FETCH_FAILURE
    } from '../actions/fetch_friends'

// REDUCER
    // Initial State
    const initialState = {
        friends: [],

        is_FetchingFriends: false,
        is_SavingFriends: false,

        is_DeletingFriend: false,
        is_UpdatingFriend: false,
        
        err: ''
    }

export const friends_reducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIENDS_FETCH_START:
            return {
                ...state,
                is_FetchingFriends: true,
                err: ''
            }
        case FRIENDS_FETCH_SUCCESS:
            return {
                ...state,
                is_FetchingFriends: false,
                err: ''
            }
        case FRIENDS_FETCH_FAILURE:
            return {
                ...state,
                is_FetchingFriends: false,
                err: 'FAILED API CALL'
            }
        default:
            return state
    }
}