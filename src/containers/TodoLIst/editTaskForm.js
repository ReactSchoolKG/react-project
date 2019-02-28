import React, { Component } from 'react';

import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";



class EditTaskForm extends Component{

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

                <Form onSubmit={handleSubmit} >
                    <div className="add-form-wrapper">
                        <Field
                            name="taskName"
                            type="text"
                            component={this.renderTextField}
                            text="edit"
                        />
                        <Button type='submit' className="btn-add" onClick={this.handleSubmit}>edit</Button>
                    </div>
                </Form>

        )
    }
}
export default reduxForm({
    form: 'editForm',
})(EditTaskForm);
