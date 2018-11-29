import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import {PATHS} from "./constants/routes";
import Error from "./components/newComponent/fourZerofour";
import newOne from "./components/newComponent/newOne";
import Lifting from "./components/newComponent/lifting";

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
                <Route path={PATHS.DASH1} component={newOne} />
                <Route path={PATHS.DASH2} render={()=>{return <Redirect to={PATHS.DASH1} />}} />
                <Route path={PATHS.LIFT} component={Lifting}/>
                <Route component={Error} />
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
