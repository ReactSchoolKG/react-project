import React, {Component} from 'react';

class Lifting extends Component{
    
    render(){
        const viewItems = this.props.receivednumbers
            .map((i, index) => <h1 key={index} onClick={this._handlerDelete}>{i}</h1>);
        return(
            <div>
                {viewItems}
            </div>
        )
    }

    _handlerDelete = (e) => {
        this.props.addNumber(parseInt(e.target.innerText));
    }
}

export default Lifting;