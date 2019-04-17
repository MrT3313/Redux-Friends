// ACTION TYPES
    import {
        ADD_FRIEND_ATTEMPT,
        ADD_FRIEND_SUCCESS,
        ADD_FRIEND_FAILURE
    } from '../actions/add_friend'

// Initial State
    const initialState = {
        is_AddingFriend: false,
        err: ''
    }

export const addFriend_reducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case ADD_FRIEND_ATTEMPT:
            return {
                ...state,
                is_AddingFriend: false,
                err: ''
            }
        //!! -- WHY DOES THIS WORK -- !!
        // MOVED INTO friendsList Reducer
            // case ADD_FRIEND_SUCCESS:
            //     return {
            //         ...state,
            //         friends: action.payload,
            //         is_AddingFriend: false,
            //         err: ''
            //     }
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