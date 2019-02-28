import React, { Component } from 'react';
import './sign.css'
import SignInForm from './singInForm';
import axios from 'axios';


class SignIn extends Component {
    handleSubmit = async value =>{
        try{
            const response = await axios.post('https://node--api.herokuapp.com/users/sign_up',{
                firstName: value.firstName,
                lastName: value.lastName,
                username: value.username,
                email:value.email,
                password:value.password
            });
            console.log(response.data)
        }catch(err){
            console.error(err);
        }
    };

    render(){
        return (
            <div>
            <SignInForm onSubmit={this.handleSubmit} />
            </div>
        );
    }

}
export default SignIn;
