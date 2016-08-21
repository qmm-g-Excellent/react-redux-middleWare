let id = 0;
function reducer(state = {todos: [], filterName: "All"}, action) {
    const index = state.todos
        .indexOf(state.todos.find(todo=>todo.id === action.id));
    switch (action.type) {
        case "ADD":
            return {
                todos: [...state.todos, {text: action.text, isDone: false, id: id++}],
                filterName: state.filterName
            };
        case "DELETE":
            state.todos.splice(index, 1);
            return {
                todos: [...state.todos],
                filterName: state.filterName
            };
        case "TOOGLE":
            state.todos[index].isDone = !state.todos[index].isDone;
            return {
                todos: [...state.todos],
                filterName: state.filterName
            }
        case "FILTERNAME":
            return {
                todos: [...state.todos],
                filterName:action.name
            }
    }
    return state;
}


export default reducer;