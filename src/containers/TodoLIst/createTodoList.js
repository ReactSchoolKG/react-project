import React, { Component } from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateTodo extends Component{
state={
    title:''
}

    handleChangeTodo = event => {
        this.setState({title: event.target.value });
    }

    handleSubmit=()=>{
        this.props.add(this.state.title)

    }

    renderTextField =(props)=>{
        const {
            input,
            type,
            text,
            ...custom
        } = props;
        return(
            <FormGroup
                controlId="formBasicText"
                {...custom}
                {...input}
            >
                <FormControl
                    type={type}
                    placeholder={text}
                />
            </FormGroup>
        )
    };
    render() {
        const {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit} className="login-form">
                <label className="texte-info">Login</label>
                <Field
                    onChang={this.handleChangeTodo}
                    className="namee-form"
                    name="username"
                    type="text"
                    component={this.renderTextField}
                    text="add"
                />
                <Button onClick={this.handleSubmit}>ADD</Button>
            </Form>
        )
    }
}
export default reduxForm({
    form: 'FilterForm',
})(CreateTodo);
