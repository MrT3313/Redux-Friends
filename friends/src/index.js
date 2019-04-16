// REACT
    import React from 'react';
    import ReactDOM from 'react-dom';

    // router
    import { BrowserRouter as Router } from 'react-router-dom'
    // redux
        import { Provider } from 'react-redux'

// REDUX
    import { createStore } from 'redux'
    import logger from 'redux-logger'
    // middleware
        import { applyMiddleware } from 'redux'
        import thunk from 'redux-thunk'
    // Dev Tools
        import { compose } from 'redux'

// COMPONENTS
    import App from './App';

// REDUCERS
    import { rootReducer } from './reducers';

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

// CREATE - Store Enhancers
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// CREATE STORE - start
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(thunk, logger)
        )
    );
// CREATE STORE - end

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

