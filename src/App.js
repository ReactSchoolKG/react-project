import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import MyComponent from './components/myComponent';
import Error from './components/error';
import Liftings from './components/lifting/liftings'
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
                <Route path='/mycomponent1' render={()=><div>
                  <h1>React</h1>
                  <Redirect to='/mycomponent2'/>;
                </div>} />
                <Route path='/mycomponent2' component={MyComponent} />
                <Route path={PATHS.LIFTING} component={Liftings}/>
                <Route component={Error}/>
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
