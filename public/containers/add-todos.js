import React, {Component} from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

class Addtodos extends Component {
    add() {
        this.props.onAdd(this.refs.input.value);
        this.refs.input.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.add.bind(this)}>+</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (text)=> {
            dispatch({type: "ADD", text})
        }
    }
}
export default connect(()=> {
        return {}
    },
    mapDispatchToProps)(Addtodos);