import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to={PATHS.INDEX}>Home</Link>
        <Link to={PATHS.ABOUT}>About</Link>
        <Link to={PATHS.ITEMS}>Items</Link>
        <Link to={PATHS.DASHBOARD1}>Dashboard1</Link>
        <Link to={PATHS.DASHBOARD2}>Dashboard2</Link>
        <Link to={PATHS.LIFTING}>Lifting</Link>
      </header>
    );
  }
}

export default Header;
