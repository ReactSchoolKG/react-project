import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import {PATHS} from "./constants/routes";

import PureComp1 from "./components/Dashboards/PureComponent";
import PureComp2 from "./components/Dashboards/PureComponent2";
import NotFoundPage from "./components/NotFoundComponent/NotFoundPage";
import Lifting from "./components/Lifting/lifting";

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
                <Route exact path={PATHS.DASHBOARD1} component={PureComp1} />
                <Route exact path={PATHS.DASHBOARD2} render={()=>( false ? (
                    <div>
                      <h1>
                        <PureComp2></PureComp2>
                      </h1>
                    </div>
                  ) : (
                    <Redirect to={PATHS.DASHBOARD1}></Redirect>)
                  )}
                 />
                <Route exact path={PATHS.LIFTING} component={Lifting} />
                <Route component={NotFoundPage} />
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
