import React, { Component } from 'react';
import './Sign.css'
import SignInForm from './singInForm';


class Sign_in extends Component {

    handleSubmit=(value)=>{
        console.log(value);
    };
    render(){
        return (
            <SignInForm onSubmit={this.handleSubmit} />
              );
    }
}
export default Sign_in;
