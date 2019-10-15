// IMPORTS
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

// COMPONENTS

// IMPORT ACTION CREATOR
import {a_login} from '../redux/actions/a_login.js'

// STYLED COMPONENTS
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    width: 50%;

    border: 1px solid blue;
`;
// COMPONENT TO EXPORT
function Login(props){
const [userName, setUserName] = useState()
const [PW, setPW] = useState()
// - USE EFFECT- //
useEffect(() => {
    console.log(userName)
    console.log(PW)
})

// -- //
    const handleInput = e => {
    e.preventDefault()
    // -- //
        if (e.target.id === 'userName') {
            setUserName(e.target.value)
        } else if (e.target.id === 'PW') {
            setPW(e.target.value)
        }
    }
    const submit = e => {
    e.preventDefault()
    console.log(userName, PW)
    // -- //
        props.a_login({userName, PW})
        .then(() => {
            props.history.push('/')
        }) 

    }
    return(
        <StyledForm
            onSubmit={submit}
        >
            <input
                id='userName'
                type='text'
                placeholder='userName'
                onChange={handleInput}
                value={userName}
            ></input>
            <input
                id='PW'
                type='text'
                placeholder='password'
                onChange={handleInput}
                value={PW}
            ></input>
            <button>Login</button>
        </StyledForm>
    )
}

// MSTP
const mapStateToProps = state => {
    return {
        
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // map state to props
    {
        a_login
    } // action creators
)(Login)