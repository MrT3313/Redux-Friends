// IMPORTS
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';


// COMPONENTS
import Login from './components/Login.js'

// CSS
import './App.css';

// COMPONENT TO EXPORT
function App() {
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

// EXPORT
export default App;
