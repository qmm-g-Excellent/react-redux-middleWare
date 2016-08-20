import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        const text = ["ALL", "ACTIVE", "COMPLETED"].map((filterName,index) =>
            <a key={index}
               style={{"textDecoration":this.props.name === filterName ? "underline": "" }}
               onClick={this.props.onSetName.bind(this, filterName)}>{filterName}{" "}</a>
        );

        return (
            <div>
                {text}
                <button onClick={this.props.onComRemove}>CLEAR COMPLETED</button>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        name:state.filterName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetName: (name)=> {
            dispatch({type: "TOGGLEFILTER", name})
        },
        onComRemove:()=> {dispatch({type:"CLEARCOMPLETED"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);