import React from 'react';
import '../../styles/liftings.css';

function LiftingHOC (WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                leftnumbers:[1,2,3,4,5],
                rightnumbers:[6,7,8,9,0]
            };
        }
        render(){
            return (
                <div className="liftings">
                    <WrappedComponent receivednumbers = {this.state.leftnumbers}
                                    addNumber={this._addNumbersRight}/>
                    <WrappedComponent receivednumbers = {this.state.rightnumbers}
                                    addNumber={this._addNumbersLeft}/>
                </div>
            )
        }

        _addNumbersRight=(number)=>{
            let newItems = this.state.rightnumbers;
            newItems.push(number);
            let newArray = this.state.leftnumbers.filter((elem)=>{
                return elem !==number;
            })
            this.setState({
                leftnumbers:newArray,
                rightnumbers:newItems
            })
        }
        
        _addNumbersLeft=(number)=>{
            let newItems = this.state.leftnumbers;
            newItems.push(number);
            let newArray = this.state.rightnumbers.filter((elem)=>{
                return elem !==parseInt(number);
            })
            this.setState({
                rightnumbers:newArray,
                leftnumbers:newItems
            })
        }
    }
}
export default LiftingHOC;