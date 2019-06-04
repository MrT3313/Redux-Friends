// AXIOS
    import axios from 'axios';
    // Auth
    import axiosWithAuth from '../utils/axiosAuth'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

// ACTION TYPES
    export const FRIENDS_FETCH_START = 'FRIENDS_FETCH_START'
    export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS'
    export const FRIENDS_FETCH_FAILURE = 'FRIENDS_FETCH_FAILURE'

// ACTION CREATOR
    export const fetch_friends = (passedItem) => {
        console.log('inside FRIENDS Action Creator')
        console.log('passed item', passedItem)

    // THUNK - START
    return (dispatch) => {
        // DISPATCH STARTING ACTION
        dispatch({ type: FRIENDS_FETCH_START })
        
        // Start API Call
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends`)
            .then( res => {
                console.log( res )
                console.log( res.data )

                dispatch({
                    type: FRIENDS_FETCH_SUCCESS,
                    payload: res.data
                })
            })
            .catch( err => {
                console.log( err )

                dispatch({
                    type: FRIENDS_FETCH_FAILURE,
                    // payload: res.data.payload
                })
            }) 
    }
}


