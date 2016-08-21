import React,{Component} from "react";
import {render} from "react-dom";
import {connect} from "react-redux";


class Footer extends Component{
    render(){
        const btnText = ["All","Active","Completed"].map((item,index)=>
            <a  key={index}
               style={{"textDecoration":this.props.btnName === item ? "underline" : ""}}
               onClick={this.props.onSetBtnName.bind(this,item)}>
                {item}{" "}
            </a>
        );
        return <div>
            {btnText}
            <button onClick={this.props.clearCompleted.bind(this,this.props.todos)}>Clear Completed</button>
        </div>
    }
}

function mapStateToProps(state){
    return {
        btnName:state.filterName,
        todos:state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        onSetBtnName:(name)=> dispatch({type:"FILTERNAME",name}),
        clearCompleted:(todos)=>{
            const activeItems = todos.filter(item=> item.isDone === false);
            dispatch({type:"CLEARCOMPLETED",activeItems})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);