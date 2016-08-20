import React, {Component} from "react";
import {render} from 'react-dom';
import {connect}  from "react-redux";

class TodoList extends Component{
    remove(index){
        this.props.onRemove(index)
    }

    render(){
        const todosText = this.props.todos.map((todo ,index)=><div key={index}>
            {todo.text}
            <button onClick={this.remove.bind(this,index)}>X</button>
        </div>);
        return (
            <div>
                {todosText}
            </div>
        )
    }
}
function mapStateToProps(state){
     return {
         todos:state.todos
     }
}

function mapDispatchToProps(dispatch){
    return {
        onRemove:(index)=>dispatch({type:"DELETE",index})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);