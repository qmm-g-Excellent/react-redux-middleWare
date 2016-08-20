import React, {Component} from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import App from "./containers/app";
import reducer from "./reducers/reducer";
import {Provider} from "react-redux"
const store = createStore(reducer); /// ??

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app'));
