import React, { Component } from 'react';
import LiftingHOC from './liftingHOC';
import Lifting from './lifting';

const WrappedLifting = LiftingHOC(Lifting);

class Liftings extends Component {
  render () {
    return <div>
        <WrappedLifting/>
    </div>
  }
}

export default Liftings;
