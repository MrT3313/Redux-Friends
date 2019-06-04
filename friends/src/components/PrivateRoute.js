import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

// REQUIREMENTS
    // 1 -- must have same API as <Route />
    // 2 -- must RENDER a <Route /> component and pass all props through 
    // 3 -- must CHECK for token  & redirect if unAuthed || render if Authed

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            // - V1 -
            // render={ props => {
            //     if (localStorage.getItem('token')) {
            //         return <Component {...props}/>
            //     } else {
            //         return <Redirect to='/login' />
            //     }
                    
            // }}
            // - V2 - 
            render={ props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    );
}

export default PrivateRoute;