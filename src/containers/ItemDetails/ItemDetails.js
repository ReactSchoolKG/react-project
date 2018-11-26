import React, { Component } from 'react';

class ItemDetailsContainer extends Component {
  render () {
    const id = this.props.match.params.id;
    return <div className="item-details-container">
      <h2>
        Single Item # {id}
      </h2>
    </div>
  }
}

export default ItemDetailsContainer;
