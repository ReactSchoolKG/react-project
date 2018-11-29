import React, { Component } from 'react';
import LiftingItem from '../../components/LiftingItem/LiftingItem';

class LiftingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstArray: [1,2,3,4,5],
      secondArray: [6,7,8,9,10]
    }
  }
  render () {
    return <div>
      <h2>
        Lifting Component
      </h2>
      <section className="lifting-component">
        <LiftingItem change={this.changePlace} array={this.state.firstArray} />
        <LiftingItem change={this.changePlace} array={this.state.secondArray} />
      </section>
    </div>
  }

  changePlace = (e) => {
    let arrayItem = e.target.textContent;
    let showCurrentArrayValue = this.isItFirstArray(arrayItem);
    let currArray = showCurrentArrayValue ? this.state.firstArray : this.state.secondArray;
    let anotherArray = showCurrentArrayValue ? this.state.secondArray : this.state.firstArray;
  
    let newFirstArray = currArray.filter((item) => {
      return item != arrayItem;
    });
    
    let newSecondArray = anotherArray;
    newSecondArray.push(arrayItem);

    if(showCurrentArrayValue) {
      this.setState({
        firstArray: newFirstArray,
        secondArray: newSecondArray
      });
    } else {
      this.setState({
        firstArray: newSecondArray,
        secondArray: newFirstArray
      });
    }   
  }

  isItFirstArray = (item) => {
    let array = this.state.firstArray.filter((i) =>{
      return i == item;
    });
    if(array.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

export default LiftingComponent;
