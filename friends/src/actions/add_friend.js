// AXIOS
    import axios from 'axios'
    // Auth
    import axiosWithAuth from '../utils/axiosAuth'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

// ACTION TYPES
    export const ADD_FRIEND_ATTEMPT = "ADD_FRIEND_ATTEMPT"
    export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS"
    export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE"

// ACTION CREATOR
    export const add_friend = (newFriend) => {
        console.log(newFriend)
        return (dispatch) => {
            // dispatch starting action
                dispatch( { type: ADD_FRIEND_ATTEMPT } )
            // START API
                axiosWithAuth()
                    .post(`http://localhost:5000/api/friends`, newFriend)
                    .then( res => {
                        console.log( res )
                        console.log( res.data )

                        dispatch({
                            type: ADD_FRIEND_SUCCESS,
                            payload: res.data
                        })
                    })
                    .catch( err => {
                        console.log( err )

                        dispatch({
                            type: ADD_FRIEND_FAILURE
                        })
                    })
        }
    }