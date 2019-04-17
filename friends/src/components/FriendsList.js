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
        this.props.fetch_friends()
    }

    render() {
        {console.log(this.props)}
        return(
            <>
                <h2>Friends List</h2>
                <div>
                {
                    !this.props.friends && console.log('YOU HAVE NO FRIENDS ON PROPS')
                }
                {
                    this.props.friends && this.props.friends.map( friend => {
                        console.log(friend)
                    })
                }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends_reducer.friends,
        is_FetchingFriends: state.friends_reducer.is_FetchingFriends,

        // is_SavingFriends: state.is_SavingFriends,

        // is_DeletingFriend: state.is_DeletingFriend,
        // is_UpdatingFriend: state.is_UpdatingFriend,

        err: state.err,
    }
}
export default connect(mapStateToProps, { fetch_friends })(FriendsList)