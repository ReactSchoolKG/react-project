import React, { Component } from 'react';
import ListNumbers from '../../components/ListNumbers/ListNumbers';

class LiftingContainer extends Component {
  constructor(props) {
    super(props);


    this.state = {
      leftList: [1,2,3,4,5],
      rightList: [6,7,8,9,10]
    }

  }

  moveNumber = (title) => evt => {
    if(evt.target.tagName !== 'LI'){
      return;
    }

    const value = parseInt(evt.target.innerHTML);

    if(this.state.leftList.length > 1 && title === 'Left' || this.state.rightList.length > 1 && title === 'Right'){
      switch(title){
        case 'Left':
          this.setState((state)=>({
            leftList: state.leftList.filter((i)=>{
              return i !== value;
            })
          }), () => {
            let newList = [...this.state.rightList,value];
            this.setState({
              rightList: newList
            })
          })
          break;
        case 'Right':
          this.setState((state)=>({
            rightList: state.rightList.filter((i)=>{
              return i !== value;
            })
          }), () => {
            let newList = [...this.state.leftList,value];
            this.setState({
              leftList: newList
            })
          })
          break;
        default:
          break;

      }
    }
  }

  render () {
    
    return (
    <div className="lifting-container">
      <h2>
        Lifting page
      </h2>
      <div className={'wrap-block'}>
        <ListNumbers handler={this.moveNumber} numbers={this.state.leftList} title={'Left'}/>
        <ListNumbers handler={this.moveNumber} numbers={this.state.rightList} title={'Right'}/>
      </div>
    </div>
    )
  }
}

export default LiftingContainer;