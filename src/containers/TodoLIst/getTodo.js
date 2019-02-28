import React, { Component } from 'react';
import axios from 'axios';
import CreateTodo from './createTodoList'
import EditTaskForm from './editTaskForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {addTodo,getById,removeTaskById, updateItem} from "../../actions/actionCreator";




class GetTodo extends Component {
    state ={
        show: false,
        edit: false,
    }
    componentDidMount(){
        this.getTodos();
        // this.getTodosByID();
    }

    getTodos = async ()=>{
        try{
            const response = await axios.get('https://node--api.herokuapp.com/todos',{headers :{ token: localStorage.getItem('token')}});
            this.props.addTodo(response.data.data);
            }
                catch(err){
                    console.error(err);
                }
    }

    handleSubmit=async(value)=>{
        try{
            const response = await axios.post('https://node--api.herokuapp.com/todos',{
                title: value.title
            },
                {headers :{ token: localStorage.getItem('token')}},

            )
            this.props.addTodo(response.data.data)
        }
        catch(err){
            console.error(err);
        }
    }

    // handleRemove = async(value) => {
    //     try {
    //         const response = axios.delete('https://node--api.herokuapp.com/todos/:id',
    //             {headers :{ token: localStorage.getItem('token')}},);
    //         this.props.removeTodo(response.data.data)
    //     }
    //     catch (err) {
    //         console.error(err);
    //     }
    // }

    getItemById=async(item)=>{
        try{
            this.setState({ show: true });
            const response = await axios.get(`https://node--api.herokuapp.com/todos/${item.id}`, {headers :{ token: localStorage.getItem('token')}})
            this.props.getById(response.data.data);
            this.setState({show: true});
        }
        catch(err){
            console.error(err);
        }
    };

    Edit = async(value) =>{
        try{
            await axios.put(`https://node--api.herokuapp.com/todos/${this.props.element.id}`,{
                title: value.taskName
            },{headers :{ token: localStorage.getItem('token')}});
            this.props.updateItem(this.props.element, value.taskName);
            this.setState({ edit: false});
        }catch(err){
            console.log(err)
        }
    };

    removeTask = async(item, key)=>{
        try{
            await axios.delete(`https://node--api.herokuapp.com/todos/${item.id}`,{headers :{
                token: localStorage.getItem('token')}
            })
            .then( () => {
                this.props.removeTaskById(item.id, key);
            });
        }catch(err){
            console.log(err)
        }
    };


    renderListOfTask = () =>{
        console.log(this.props, );
        if(this.props.todo || this.props.element) {
            if(this.state.show){
                if(this.props.element) {
                    if(this.state.edit){
                        return <EditTaskForm initialValues={{ taskName: 'this.props.element.title' }}  onSubmit={this.Edit}/>
                    }else return <div onClick={()=>this.setState({edit: true})}>Name of task: {this.props.element.title}</div>
                }
            }else
                return(
                    <div style={{ height: 200, width: 400 }}>
                        {console.log(this.props.todo)}
                        <ul className="scroll">
                            {this.props.todo.map((task, key) => (
                                <div key={key} style={{display: 'flex'}}>
                                    <li className="list-group">
                                        <p className="nazva">{task.title}</p>
                                        <span style={{marginLeft: '15px'}} onClick={()=>this.removeTask(task, key)}>Видалити</span>
                                        <span style={{marginLeft: '15px'}} onClick={()=>this.getItemById(task)}>Редагувати</span>
                                    </li>
                                </div>

                            ))}
                        </ul>
                     </div>
            )
        }

       else{
           return 'Завдань немає'
       }

    };

    render(){
        return(
             <div>
                 <CreateTodo onSubmit={this.handleSubmit} list={this.renderListOfTask()}/>
             </div>
        )
    }
}


const mapStateToProps = ({todo}) =>{
    return {
        todo: todo.items,
        element: todo.element
    }
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({addTodo,getById,removeTaskById, updateItem, dispatch}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(GetTodo);