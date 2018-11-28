import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import Next from "./containers/Next";
import Lifting from "./containers/Homework";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
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
                <Route exact path={PATHS.NEXT} component={Next} />
                <Route exact path={PATHS.LAST} render = {() => (<h1>LAST page</h1>)} />
                <Route exact path={PATHS.LIFTING} component={Lifting} />
                <Route exact path={PATHS.ITEM_DETAILS} component={ItemDetailsContainer} />

              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
