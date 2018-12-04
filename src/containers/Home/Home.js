import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { changeCounter, changeAsync } from "../../actions/counter";

class HomeContainer extends Component {
  render () {
    const { value, disabled, actions } = this.props;
    return <div className="home-container">
      <h2>
        Home page
      </h2>
      <div style={{textAlign: 'center'}}>
        <h3>{value}</h3>
        <button onClick={() => actions.changeCounter(1)} >+</button>
        <button onClick={() => actions.changeCounter(-1)}>-</button>
        <br/>
        <button disabled={disabled} onClick={() => actions.changeAsync(1)}>Async +</button>
        <button disabled={disabled} onClick={() => actions.changeAsync(-1)}>Async -</button>
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeCounter,
    changeAsync
  }, dispatch)
});
const mapStateToProps = ({counter}) => ({
  value: counter.value,
  disabled: counter.disabled
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
