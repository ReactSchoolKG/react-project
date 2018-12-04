import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from "../../services/FakeAuth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
          return !fakeAuth.isAuthenticated ? <Redirect to="/"/> : <Component {...props} />
        }}
    />
);

export default PrivateRoute;