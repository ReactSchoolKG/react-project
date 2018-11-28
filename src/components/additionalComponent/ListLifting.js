import React from 'react'
import './style.css'

class ListLifting extends React.Component{
    render(){
        return(
            <div className={this.props.class}>
                <ul>
                    {this.props.list.map((i,index) => <li key={i} onClick={this._handleItem}>{i}</li>)}
                </ul>
            </div>
        );
    }
    _handleItem = (e)=>{
        this.props.onChange(e.target.innerText)
    }

}

export default ListLifting;