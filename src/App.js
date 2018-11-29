import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect , Link} from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import {PATHS} from "./constants/routes";
import SomeComponent from './components/SomeComponent';
import Lifting from './components/Lifting';


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
                <Route exact path={"/dashboard"} component={SomeComponent}/>
                <Route exact path={"/dashboard2"} render = {()=>(<Redirect to='/dashboard'/>)}/>
                <Route exact path={"/lifting"} component= {Lifting}/> 
                <Route exact render = {()=>(
                  <div>
                    <h1>Error 404</h1>
                    <h3>Back to the home page: <Link to={PATHS.INDEX}>Home</Link></h3>
                  </div>
                )}/>
               
              
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
