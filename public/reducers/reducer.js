let id = 0;
function reducer(state = {todos: []}, action) {
    switch (action.type) {
        case "ADD":
            return {
                todos: [...state.todos, {text: action.text, isDone: false, id: id++}]
            }
    }
    return state;
}


export default reducer;