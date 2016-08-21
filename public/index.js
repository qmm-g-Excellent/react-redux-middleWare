import React, {Component} from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {connect} from "react-redux";
import reducer from "./reducers/reducer";
import Addtodos from "./containers/add-todos";

const store = createStore(reducer);

class App extends React.Component{
    render(){
        // console.log(this.props.todos);
        return <div>
            <Addtodos />
          </div>
    }
}

{/*function mapStateToProps(state){*/}
//     return {
//         todos:"jjjj"
//     }
// }


render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("container"));

 // connect(mapStateToProps)(App);
