// REACT
    import React, { Component } from 'react';

// MATERIAL UI
    import { TextField, Button } from '@material-ui/core'

// STYLED COMPONENTS
    import styled from 'styled-components'

// -- ** CODE START ** -- //
// -- ** CODE START ** -- //

const Styled_form = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`;

export default class NewFriendForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handler_NewFriendInput = e => {
        this.setState(
            { [e.target.id] : e.target.value}
        )
    }
    
    render() {
        return (
            <Styled_form>
                <TextField 
                    id='name'
                    label='Name'
                    onChange={this.handler_NewFriendInput}
                />
                <TextField 
                    id='age'
                    label='Age'
                    onChange={this.handler_NewFriendInput}
                />
                <TextField 
                    id='email'
                    label='E-mail'
                    onChange={this.handler_NewFriendInput}
                />

                <Button>Enter Friend</Button>
            </Styled_form>
        )
    }
}