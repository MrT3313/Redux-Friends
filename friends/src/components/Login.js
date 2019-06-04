// REACT
    import React, { Component } from 'react';
    // React - Spinners
        // import Loader from 'react-loader-spinner'
// REDUX
    // import { connect } from 'net';
    import { connect } from 'react-redux';

// MATERIAL IU
    import { Paper, TextField, Button } from '@material-ui/core'
// STYLED COMPONENTS
    import styled from 'styled-components'

// IMPORT ACTION CREATOR -> connect to store
    import { login_attempt } from '../actions/login'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

// STYLING -- START (combination of styled-components & material-ui)
    const Styled_Paper = styled(Paper)`
        display: flex;
        flex-direction: column;

        width: 50%;

        padding: 20px;
        margin: 50px auto 0 auto;
        
        h2 {
            text-align: center;
        }
    `;
    const Styled_TextField = styled(TextField)`

    `;
    const Styled_Button = styled(Button)`
        
    `;
// STYLING -- END
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input_userName: '',
            input_password: ''
        }
    }

    hander_UserInputChange = e => {
        this.setState( 
            { [e.target.id] : e.target.value }
        )
    }

    handler_ButtonClick = e => {
        e.preventDefault()
        console.log('clicked in <Login />')
        // CALL ACTION CREATOR
        this.props.login_attempt(this.state).then(() => {
            this.props.history.push('/friends-list');
        })


    }

    render() {
        return(
            <>
                <Styled_Paper>
                    <h2>Please Login</h2>
                    {/* { this.props.is_LoggingIn && 
                        <p><Loader type="Ball-Triangle" color="#somecolor" height={80} width={80} /></p> 
                    } */}
                    <Styled_TextField
                        id="input_userName"
                        label="USERNAME"
                        
                        onChange={this.hander_UserInputChange}
                    />
                    <Styled_TextField
                        id="input_password"
                        label="PASSWORD"
                        
                        onChange={this.hander_UserInputChange}
                    />
                    <Styled_Button 
                        variant="contained" 

                        onClick={this.handler_ButtonClick}
                    >Submit</Styled_Button>
                </Styled_Paper>
            </>
        )
    }
}


// -V1- //
// Map State To Props

    const mapStateToProps = state => {
        return {
            is_LoggingIn: state.is_LoggingIn,
            err: state.err
        }
    }
export default connect(mapStateToProps, { login_attempt })(Login)

// -V2- //
// export default connect(mapStateToProps, { login_attempt })(Login)