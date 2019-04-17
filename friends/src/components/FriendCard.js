// REACT
    import React, { Component } from 'react';

// MATERIAL UI
import { Card } from '@material-ui/core'

// STYLED COMPONENTS
    import styled from 'styled-components'

// -- ** CODE START ** -- //
// -- ** CODE START ** -- //

const Styled_Card = styled(Card)`  
    display: flex;
    flex-direction: column;
    text-align: center;

    width: 200px;

    margin: 15px;
    padding: 15px;

    h3, h4, h5 {
        margin: 5px 0px;
    }
`;

class FriendCard extends Component {
    render() {
        return (
            <Styled_Card>
                <h3>{this.props.friend.name}</h3>
                <h4>{this.props.friend.age}</h4>
                <h5>{this.props.friend.email}</h5>
            </Styled_Card>

        )
    }
}

export default FriendCard