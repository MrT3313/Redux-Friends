// REACT 
  import React, { Component } from 'react';
  import { Route } from 'react-router-dom'

// COMPONENTS
  import Login from './components/Login'
  import Homepage from './components/Homepage'
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
          exact path='/homepage'
          component={Homepage}
        />
        {/* <Route exact path='/homepage'
          render={props => <Homepage {...props} /> }
        /> */}
      </div>
    );
  }
}

export default App;
