import React, { Component } from 'react';

import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.css'

class CreateTodo extends Component{

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
            <React.Fragment>

            <Form onSubmit={handleSubmit} className="todo-form">

                <label className="texte-info">Create Todo</label>
                <div className="add-form-wrapper">
                    <Field
                        className="namee-form"
                        name="title"
                        type="text"
                        component={this.renderTextField}
                        text="add"
                    />

                <Button type='submit' className="btn-add" onClick={this.handleSubmit}>ADD</Button>
                </div>

                {this.props.list}

            </Form>
            </React.Fragment>
        )
    }
}
export default reduxForm({
    form: 'FilterForm',
})(CreateTodo);
