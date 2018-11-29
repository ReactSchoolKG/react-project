import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./styles/base.scss";
import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import Dashboard from "./components/dashboard/Dashboard";
import Lifting from "./components/lifting/Lifting";
import { PATHS } from "./constants/routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainLayout>
            <Switch>
              <Route exact path={PATHS.INDEX} component={HomeContainer} />
              <Route path={PATHS.ABOUT} component={AboutContainer} />
              <Route exact path={PATHS.ITEMS} component={ItemsContainer} />
              <Route
                exact
                path={PATHS.ITEM_DETAILS}
                component={ItemDetailsContainer}
              />
              <Route exact path={PATHS.DASHBOARD1} component={Dashboard} />
              <Route
                exact
                path={PATHS.DASHBOARD2}
                render={() => (
                  <React.Fragment>
                    <h2>Use render</h2>
                    <Dashboard />
                    <Redirect to={PATHS.DASHBOARD1} />
                  </React.Fragment>
                )}
              />
              <Route exact path={PATHS.LIFTING} component={Lifting} />
              <Route exact path="/404" render={() => <h2>This is 404</h2>} />
              <Redirect from="*" to="/404" />
            </Switch>
          </MainLayout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
