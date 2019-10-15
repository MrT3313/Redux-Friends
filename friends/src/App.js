// IMPORTS
import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom';

// IMPORT ACTION CREATORS
import {a_getFriends} from './redux/actions/a_getFriends.js'

// COMPONENTS
import Login from './components/Login.js'

// CSS
import './App.css';
import { props } from 'bluebird';

// COMPONENT TO EXPORT
function App(props) {
useEffect(() => {
  if(localStorage.getItem('token')) {
    props.a_getFriends()
  }
})
  return (
    <div className="APP_CONTAINER">
      <div>HELLO</div>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <Route path="/login" component={Login} />
          {/* <Route component={Login} /> */}
      </Switch>
    </div>
  );
}

// MSTP
const mapStateToProps = state => {
  return {
    JWT: state.LOGIN.userJWT
  }
}

// EXPORT w/ CONNECT
export default connect(
  mapStateToProps, // map state to props
  {
    a_getFriends
  } // action creators
)(App)
