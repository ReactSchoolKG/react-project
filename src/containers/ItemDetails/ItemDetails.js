import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetailsContainer extends Component {
  render () {
    const id = this.props.match.params.id;
    return <div className="item-details-container">
      <h2>
        Single Item # {id}
      </h2>
      <Link to="/items/1"> 1 </Link>
      <Link to="/items/2"> 2 </Link>
    </div>
  }

  componentDidMount () {
    console.log('mount');
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('update', prevProps, prevState);
  }
}

export default ItemDetailsContainer;
