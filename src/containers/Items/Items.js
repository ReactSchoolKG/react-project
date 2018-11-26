import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemsContainer extends Component {
  render () {
    return <div className="items-container">
      <h2>
        Items
      </h2>
      <ul>
        <li>
          <Link to="/items/1">1</Link>
        </li>
        <li>
          <Link to="/items/2">2</Link>
        </li>
      </ul>
    </div>
  }
}

export default ItemsContainer;
