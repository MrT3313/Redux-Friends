// REACT 
  import React, { Component } from 'react';
  import { Route } from 'react-router-dom'

// COMPONENTS
  import Login from './components/Login'
  import FriendsList from './components/FriendsList'
  import PrivateRoute from './components/PrivateRoute';

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //
class App extends Component {
  render() {
    return (
      <div>
        <Route 
          exact path='/'
          component={Login}
        />
        
        <PrivateRoute 
          exact path='/friends-list'
          component={FriendsList}
        />
        {/* <Route exact path='/friends-list'
          render={props => <FriendsList {...props} /> }
        /> */}
      </div>
    );
  }
}

export default App;
