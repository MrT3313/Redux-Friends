// REACT
    import React, { Component } from 'react';
// REDUX    
    // import { connect } from 'net';
    import { connect } from 'react-redux';

// IMPORT ACTION CREATOR -> connect to store
    import { fetch_friends } from '../actions/fetch_friends'

// STYLED COMPONENTS
    import styled from 'styled-components'

// COMPONENTS
    import FriendCard from './FriendCard'
    import NewFriendForm from './NewFriendForm'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //


const Styled_container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center
`;

const Styled_div = styled.div`
    display: flex;
    justify-content: center;
`;

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
                <Styled_div>
                    <NewFriendForm />
                </Styled_div>
                <Styled_container>
                    {this.props.friends.map( friend => {
                        return <FriendCard friend={friend}/>
                    })}
                </Styled_container>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends_reducer.friends,

        is_FetchingFriends: state.friends_reducer.is_FetchingFriends,

        err: state.err,
    }
}
export default connect(mapStateToProps, { fetch_friends })(FriendsList)