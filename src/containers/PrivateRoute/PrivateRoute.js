import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FakeAuth from "../../services/FakeAuth";
import {PATHS} from "../../constants/routes";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
           render={props => {
               return !FakeAuth.auth() ? <Redirect to={PATHS.LOGIN}/> : <Component {...props} />
           }}
    />
);

export default PrivateRoute;