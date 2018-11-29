import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

class Header extends Component {
  render () {
    return <header className="header">
      <NavLink activeClassName='active' to={PATHS.INDEX}>Home</NavLink>
      <NavLink activeClassName='active' to={PATHS.ABOUT}>About</NavLink>
      <NavLink activeClassName='active' to={PATHS.ITEMS}>Items</NavLink>
      <NavLink activeClassName='active' to={PATHS.LIFTING}>Lifting</NavLink>
    </header>
  }
}

export default Header;
