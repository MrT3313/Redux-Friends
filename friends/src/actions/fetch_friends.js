// AXIOS
    import axios from 'axios';

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
        axios
            .get(`http://localhost:5000/api/friends`)
            .then( res => {
                console.log( res )
            })
            .catch( err => {
                console.log( err )
            }) 
    }
}


