import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

class Header extends Component {
  render () {
    return <header className="header">
      <Link to={PATHS.INDEX}>Home</Link>
      <Link to={PATHS.ABOUT}>About</Link>
      <Link to={PATHS.ITEMS}>Items</Link>
      <Link to={PATHS.NEXT}>Next</Link>
      <Link to={PATHS.LAST}>Last</Link>
      <Link to={PATHS.LIFTING}>Lifting</Link>
    </header>
  }
}

export default Header;
