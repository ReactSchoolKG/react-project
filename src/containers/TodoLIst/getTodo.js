import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {addTodo} from "../../actions/actionCreator";


const data = {
    token: localStorage.getItem('token'),
};

class CreateTodo extends Component {

    componentDidMount(){
        this.getTodos();
    }

    getTodos = async ()=>{

        try{
            const response =await  axios.get('https://node--api.herokuapp.com/todos',{headers :{ token: localStorage.getItem('token')}});
            this.props.addTodo((response.data.data));

        }catch(err){
            console.error(err);
        }

    }

    renderListOfTask = () =>{
      if(this.props.todo.tasks){
          return    (
          <ul>
              {this.props.todo.tasks.map((task,key)=>(
                  <li  key={key}>{task}</li>
              ))}
          </ul>
          )
      }
      return undefined;
    };

    render(){
        console.log(this.props);
         return(
          <div>
              {this.renderListOfTask()}
          </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return state
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({addTodo, dispatch}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);