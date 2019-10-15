// IMPORTS
// import axios from 'axios'
import axiosWithAuth from '../../utils/axiosAuth.js'

// CREATE ACTION TYPES
export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE'

// ACTION CREATOR
export const a_getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_START })
    // -- //
    return axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then( friends => {
            console.log('friends', friends )
            dispatch({
                type: GET_FRIENDS_SUCCESS,
                payload: friends.data
            })
        })
        .catch( err => {
            dispatch({
                type: GET_FRIENDS_FAILURE,
                payload: err
            })
        })
}