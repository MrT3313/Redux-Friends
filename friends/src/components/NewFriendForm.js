// REACT
    import React, { Component } from 'react';

// REDUX
    import { connect } from 'react-redux';

// IMPORT ACTION CREATOR -> connect to store
    import { add_friend } from '../actions/add_friend'

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

class NewFriendForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handler_NewFriendInput = e => {
        e.preventDefault() 
        this.setState(
            { [e.target.id] : e.target.value}
        )
    }

    handler_addFriend = e => {
        e.preventDefault()
        this.props.add_friend(this.state)
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

                <Button
                    onClick={this.handler_addFriend}
                >Add Friend</Button>
            </Styled_form>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         friends: state.friends_reducer.friends,
//         is_FetchingFriends: state.friends_reducer.is_FetchingFriends,

//         // is_SavingFriends: state.is_SavingFriends,

//         // is_DeletingFriend: state.is_DeletingFriend,
//         // is_UpdatingFriend: state.is_UpdatingFriend,

//         err: state.err,
//     }
// }
export default connect(null, { add_friend })(NewFriendForm)