import React, {Component} from "react";
import {connect} from "react-redux";
import {render} from "react-dom";

class ShowTodos extends Component {
    render() {
        const showText = this.props.todos.map((todo, index)=> {
            return <div key={index}>
                <input type="checkbox" checked={todo.isDone}
                onClick={this.props.onToogle.bind(this,todo.id)}/>
                {todo.isDone ? <s>{todo.text}</s> : todo.text}
                <button onClick={this.props.onRemove.bind(this,todo.id)}>X</button>
            </div>
        });
        return (
            <div>
                {showText}
            </div>
        )
    }
}

function selectedShow(state){
    if(state.filterName === "Active"){
        return state.todos.filter(item=>item.isDone === false);
    }else if(state.filterName === "Completed"){
        return state.todos.filter(item=>item.isDone === true)
    }else{
        return state.todos;
    }
}


function mapStateToProps(state){
    return {
        todos:selectedShow(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onRemove: (id)=> dispatch({type: "DELETE", id}),
        onToogle:(id)=> dispatch({type:"TOOGLE",id})
    }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(ShowTodos);