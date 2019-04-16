// AXIOS
import axios from 'axios'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

// ACTION TYPES
    export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
    export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
    export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// ACTION CREATOR
export const login_attempt = (passedState) => {
    console.log('inside Action Creator')
    console.log('passed State from <Login />',passedState)

    // start - CREATE OBJECT TO PASS -- WITH 'CORRECT KEYS'
        const creds = {
            username: passedState.input_userName,
            password: passedState.input_password,
        }
        console.log('prepped OBJ for axios.POST',creds)
    // end - CREATE OBJECT TO PASS

    // THUNK - START
    return (dispatch) => {
        // dispatch starting action
            dispatch({type: LOGIN_ATTEMPT})
        // Start API Call
        axios
        .post(`http://localhost:5000/api/login`, creds)
        .then( res => {
            console.log('SUCCESSFUL axios.POST: ', res)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            console.log('FAILED axios.POST: ', err)
            dispatch({
                type: LOGIN_FAILURE,
                payload: err.data
            })
        })
    }
}