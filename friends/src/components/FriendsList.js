// REACT
    import React, { Component } from 'react';
// REDUX    
    // import { connect } from 'net';
    import { connect } from 'react-redux';

// IMPORT ACTION CREATOR -> connect to store
    import { fetch_friends } from '../actions/fetch_friends'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

class FriendsList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }

    componentDidMount() {
        console.log('inside FRIENDSLIST Component Did Mount')
        // CALL ACTION CREATOR
        this.props.fetch_friends('sentFromComponentDidMount')

    }

    render() {
        return(
            <h2>Friends List</h2>        
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        is_FetchingFriends: state.is_FetchingFriends,
        is_SavingFriends: state.is_SavingFriends,

        is_DeletingFriend: state.is_DeletingFriend,
        is_UpdatingFriend: state.is_UpdatingFriend,

        err: state.err,
    }
}
export default connect(mapStateToProps, { fetch_friends })(FriendsList)