import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

class Header extends Component {
  render () {
    return <header className="header">
      <Link to={PATHS.INDEX}>Home</Link>
      <Link to={PATHS.ABOUT}>About</Link>
      <Link to={PATHS.ITEMS}>Items</Link>
      <Link to={PATHS.DASHBOARD1}>Bashboard1</Link>
      <Link to={PATHS.DASHBOARD2}>Bashboard2</Link>
      <Link to={PATHS.LIFTING}>LiFting State</Link>
      
    </header>
  }
}

export default Header;
