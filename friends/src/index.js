// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

    // Router
    import {BrowserRouter as Router} from 'react-router-dom'

    // Redux
    import {Provider} from 'react-redux'
    import {createStore} from 'redux'
        // Reducers
        import {rootReducer} from './redux/reducer'
        // Middleware
        import {applyMiddleware} from 'redux'
        import logger from 'redux-logger'
        import thunk from 'redux-thunk'
        // Dev Tools
        import {compose} from 'redux'

// COMPONENTS
import App from './App';

// -- //
// -- //

// STORE
    // Enhancers
    const compostEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // Create Store
    const store = createStore(
        rootReducer,
        compostEnhancers(
            applyMiddleware(thunk,logger)
        )
    )

// RENDER
// Redux Provider --> by wrapping app it gives any component access to Redux Store
// BrowserRouter as Router --> by wrapping app we can set up react links / navLinks to render different components 
ReactDOM.render(
<Provider store={store}>    
        <Router>                
            <App />     
        </Router>
    </Provider>,
    document.getElementById('root')
);


