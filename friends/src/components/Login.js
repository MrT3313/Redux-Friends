// REACT
    import React, { Component } from 'react';

// MATERIAL IU
    import { Paper, TextField, Button } from '@material-ui/core'
// STYLED COMPONENTS
    import styled from 'styled-components'

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
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input_userName: '',
            input_password: ''
        }
    }

    hander_onChange = e => {
        this.setState( 
            { [e.target.id] : e.target.value }
        )
    }

    render() {
        return(
            <>
                <Styled_Paper>
                    <h2>Please Login</h2>
                    <Styled_TextField
                        id="input_userName"
                        label="USERNAME"
                        onChange={this.hander_onChange}
                    />
                    <Styled_TextField
                        id="input_password"
                        label="PASSWORD"
                        onChange={this.hander_onChange}
                    />
                    <Styled_Button 
                        variant="contained" 
                        
                    >Submit</Styled_Button>
                </Styled_Paper>
            </>
        )
    }
}