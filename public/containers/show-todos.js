import React,{Component} from "react";
import {connect} from "react-redux";
import {render} from "react-dom";

class  ShowTodos  extends Component{
    render(){
        console.log(this.props.todos)
        const showText= this.props.todos.map((todo,index)=> {
            return <div key={index}>
                {todo.text}
            </div>
        })
        return (
            <div>
                {showText}
            </div>
        )
    }
}


function mapStateToProps(state){

    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps)(ShowTodos);