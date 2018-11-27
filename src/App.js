import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import {PATHS} from "./constants/routes";
import Componento from './components/additionalComponent/Componento';
import Error404 from './components/additionalComponent/404';

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
                <Route path={PATHS.DASH1} component={Componento}/>
                <Route path={PATHS.DASH2} render={()=>{return(<Redirect to={PATHS.DASH1}/>);}}/>
                <Route component={Error404}/>
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
