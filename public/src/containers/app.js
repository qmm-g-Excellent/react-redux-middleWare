import React, {Component} from "react";
import {render} from 'react-dom'
import TodoList from "./todo-list"
import AddTodo from "./add-todo"
import Footer from "./footer"
class App extends Component{
    render() {
        return (
            <div>
                <AddTodo />
              <TodoList />
                <Footer />
            </div>
        )
    }
}

export default App;
