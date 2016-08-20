import React, {Component,PropTypes} from "react";
import {render} from 'react-dom';
import {connect} from 'react-redux';

class AddTodo extends Component{
    add(){

        this.props.onAdd(this.refs.text.value)
        this.refs.text.value = '';
    }
    render(){
        return (
           <div>
               <input type="text" ref="text"/>
               <button onClick={this.add.bind(this)}>+</button>
           </div>
        )
    }
}

AddTodo.propTypes={
    onAdd:PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        onAdd:(text)=>{dispatch({type:'ADD',text})}
    }
}



export default connect(()=>{return{}},mapDispatchToProps)(AddTodo);