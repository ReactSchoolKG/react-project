import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import {PATHS} from "./constants/routes";

import './styles/base.scss';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <MainLayout>
                <Switch>
                  <Route exact path={PATHS.INDEX} component={HomeContainer} />
                  <Route path={PATHS.ABOUT} component={AboutContainer}/>
                  <Route exact path={PATHS.ITEMS} component={ItemsContainer} />
                  <Route exact path={PATHS.ITEM_DETAILS} component={ItemDetailsContainer} />
                </Switch>
              </MainLayout>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
