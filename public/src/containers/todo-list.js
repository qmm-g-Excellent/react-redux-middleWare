import React, {Component} from "react";
import {render} from 'react-dom';
import {connect}  from "react-redux";

class TodoList extends Component{
    remove(id){
        this.props.onRemove(id)
    }

    render(){
        const todosText = this.props.todos.map((todo ,index)=><div key={index}>
            <input  checked={todo.isDone} type="checkbox"
                    onClick={this.props.onToogle.bind(this,todo.id)}/>
            {todo.isDone? <s>{todo.text}</s> : todo.text}
            <button onClick={this.remove.bind(this,todo.id)}>X</button>
        </div>);
        return (
            <div>
                {todosText}
            </div>
        )
    }
}

// const text = ["ALL", "ACTIVE", "COMPLETED"].map((filterName,index) =>

function select(state) {

    if(state.filterName === "ACTIVE") {
        return state.todos.filter((todo) => !todo.isDone)
    }else if(state.filterName === 'COMPLETED'){
        return state.todos.filter((todo) => todo.isDone)
    }else {
        return state.todos;
    }
}

function mapStateToProps(state){
    console.log(select(state));
     return {
         todos:select(state)
     }
}

function mapDispatchToProps(dispatch){
    return {
        onRemove:(id)=>dispatch({type:"DELETE",id}),
        onToogle:(id)=>dispatch({type:"TOOGLE",id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);