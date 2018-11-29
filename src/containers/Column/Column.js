import React, { Component } from 'react';
import "./styles.css";

class Column extends Component {
 
  render() {
    return <div class="column">
    	{this.props.digits.map(digit => (
    		<div className="digit" onClick={() => this.props.onDigitClick(digit)}>
    			{digit}
    		</div>
    	))}
    </div>
  }
}

export default Column;