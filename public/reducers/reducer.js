let id = 0;
function reducer(state = {todos: []}, action) {
    const index = state.todos
        .indexOf(state.todos.find(todo=>todo.id === id));
    switch (action.type) {
        case "ADD":
            return {
                todos: [...state.todos, {text: action.text, isDone: false, id: id++}]
            }
        case "DELETE":
            state.todos.splice(index,1);
            return {
                todos:[...state.todos]
            }
    }
    return state;
}


export default reducer;