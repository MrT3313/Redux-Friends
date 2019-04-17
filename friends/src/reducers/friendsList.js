// ACTION TYPES
    import {
        FRIENDS_FETCH_START,
        FRIENDS_FETCH_SUCCESS,
        FRIENDS_FETCH_FAILURE
    } from '../actions/fetch_friends'

    import {
        ADD_FRIEND_SUCCESS
    } from '../actions/add_friend'

// REDUCER
    // Initial State
    const initialState = {
        friends: [],

        is_FetchingFriends: false,
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

        // INITIAL SUCCESS
        case FRIENDS_FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                is_FetchingFriends: false,
                err: ''
            }

        // LINKED SUCCESS
        // !! -- WHY DOES THIS WORK -- !!
        case ADD_FRIEND_SUCCESS: 
        return {
            ...state,
            friends: action.payload,
            is_AddingFriend: false,
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