import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

class Header extends Component {
  render () {
    return <header className="header">
      <Link to={PATHS.INDEX}>Home</Link>
      <Link to={PATHS.ABOUT}>About</Link>
    </header>
  }
}

export default Header;
