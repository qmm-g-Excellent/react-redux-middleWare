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
        </div>
    }
}

function mapStateToProps(state){
    return {
        btnName:state.filterName
    }
}

function mapDispatchToProps(dispatch){
    return {
        onSetBtnName:(name)=> dispatch({type:"FILTERNAME",name})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);