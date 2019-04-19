// START -> ACTION TYPES
    import {
        FRIENDS_FETCH_START,
        FRIENDS_FETCH_SUCCESS,
        FRIENDS_FETCH_FAILURE
    } from '../actions/fetch_friends'

    import {
        ADD_FRIEND_ATTEMPT,
        ADD_FRIEND_SUCCESS,
        ADD_FRIEND_FAILURE
    } from '../actions/add_friend'
// end -> action types

// START -> REDUCER
    // Initial State
    const initialState = {
        // START -> pt 1
            friends: [],
            is_FetchingFriends: false,
        // end -> pt 1

        // START -> pt 2
            is_AddingFriend: false,
        // end -> pt 2
        
        // START -> ERROR
            err: ''
        // end -> error
            
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

        case FRIENDS_FETCH_FAILURE:
            return {
                ...state,
                is_FetchingFriends: false,
                err: 'FAILED API CALL'
            }

        // ADDING FRIEND 

        case ADD_FRIEND_ATTEMPT:
            return {
                ...state,
                is_AddingFriend: false,
                err: ''
            }

        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                is_AddingFriend: false,
                err: ''
            }
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                is_AddingFriend: false,
                err: 'fix yo shit'
            }

        default:
            return state
    }
}