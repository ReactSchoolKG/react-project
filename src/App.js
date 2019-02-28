import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/login.css';
import getTodo from './containers/TodoLIst/getTodo'
import MainLayout from "./Layout/Main";
import Login from "./containers/Login";
import SignIn from "./containers/Sign_in";
import getTodosByID from './containers/TodoLIst/getTodo'
import PrivateRoute from './containers/PrivateRoute'

import { Provider } from 'react-redux'
import store from './services/store'
// import SignIn from './containers/Sign_in/SignIn'

import {PATHS} from "./constants/routes";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainLayout>
              <Switch>
                <Route exact path={PATHS.LOGIN} component={Login} />
                <Route path={PATHS.SIGN_IN} component={SignIn}/>
                <PrivateRoute exact path={PATHS.TODOS} component={getTodo} />
                <PrivateRoute exact path={PATHS.TODOS_ID} component={getTodosByID} />
              </Switch>
            </MainLayout>
              </div>

        </BrowserRouter>
        </Provider>
            );
  }
}

export default App;
