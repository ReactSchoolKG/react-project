import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { changeCounter} from "../../actions/counter";

class HomeContainer extends Component {
  render () {
    return <div className="home-container">
      <h2>
        Home page
      </h2>
      <div style={{textAlign: 'center'}}>
        <h3>{this.props.value}</h3>
        <button onClick={() => this.props.changeCounter(1)} >+</button>
        <button onClick={() => this.props.changeCounter(-1)}>-</button>
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCounter
}, dispatch);
const mapStateToProps = ({counter}) => ({
  value: counter.value
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
