import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import PhoneContainer from "./containers/Phone";
import Lifting from "./containers/Lifting";
import {PATHS} from "./constants/routes";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <MainLayout>
              <Switch>
                <Route exact path={PATHS.INDEX} component={HomeContainer} />
                <Route path={PATHS.ABOUT} component={AboutContainer}/>
                <Route exact path={PATHS.ITEMS} component={ItemsContainer} />
                <Route exact path={PATHS.ITEM_DETAILS} component={ItemDetailsContainer} />
                <Route exact path={PATHS.PHONE} component={PhoneContainer} />
                <Route exact path={PATHS.RENDER} render = { () => (<h2> Render Page </h2>) } />
                <Route exact path={PATHS.LIFTING} component={Lifting} />
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
