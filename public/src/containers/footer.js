import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        const text = ["ALL", "ACTIVE", "COMPLETED"].map((filterName, index) =>
            <a key={index}
               style={{"textDecoration": this.props.name === filterName ? "underline" : ""}}
               onClick={this.props.onSetName.bind(this, filterName)}>{filterName}{" "}</a>
        );

        return (
            <div>
                {text}
                <button onClick={this.props.onComRemove.bind(this,this.props.todos)}>CLEAR COMPLETED</button>
            </div>
        )
    }
}

function getActive(state){

}

function mapStateToProps(state) {
    return {
        name: state.filterName,
        todos:state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetName: (name)=> {
            dispatch({type: "TOGGLEFILTER", name})
        },
        onComRemove: (todos)=> {
            console.log(todos);
            let active = todos.filter(todo => !todo.isDone);
            dispatch({type: "CLEARCOMPLETED", active})
        }
    };
}

    export default connect(mapStateToProps, mapDispatchToProps)(Footer);