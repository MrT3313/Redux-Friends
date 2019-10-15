// IMPORT
import axios from 'axios'

// CREATE ACTION TYPES
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// ACTION CREATOR
export const a_login = (params) => dispatch => {
console.log(params)
// -- //
// // BASE URL
//     const baseURL = 'http://localhost:5000'
// CREDS
    const creds = {
        username: params.userName,
        password: params.PW
    }
    console.log(creds)
// -- //
dispatch({ type: LOGIN_START })
// -- //
return axios
    .post('http://localhost:5000/api/login', creds)
        .then( loginSuccess => {
        console.log('loginSuccess', loginSuccess.data.payload)
        //-- //
            localStorage.setItem('token', loginSuccess.data.payload)    
        //-- //
            dispatch({
                type: LOGIN_SUCCESS,
                payload: loginSuccess.data.payload
                
            })
        })
        .catch( err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err
                
            })
        })
}