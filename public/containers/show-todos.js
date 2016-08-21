import React, {Component} from "react";
import {connect} from "react-redux";
import {render} from "react-dom";

class ShowTodos extends Component {
    render() {
        const showText = this.props.todos.map((todo, index)=> {
            return <div key={index}>
                {/*<input type="checkbox" checked={todo.isDone}*/}
                {/*onClick={this.props.onToogle.bind(this,todo.id)}/>*/}
                {todo.text}
                <button onClick={this.props.onRemove.bind(this,todo.id)}>X</button>
            </div>
        })
        return (
            <div>
                {showText}
            </div>
        )
    }
}


function mapStateToProps(state) {

    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRemove: (id)=> dispatch({type: "DELETE", id})
    }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(ShowTodos);