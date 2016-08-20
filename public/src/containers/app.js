import React, {Component} from "react";
import {render} from 'react-dom'
import TodoList from "./todo-list"
import AddTodo from "./add-todo"
class App extends Component{
    render() {
        return (
            <div>
                <AddTodo/>
              <TodoList />
            </div>
        )
    }
}

export default App;
