let id =0;
function clearCompleted(todos) {
    return todos.filter(todo=>!todo.isDone)
}
function reducer(state={todos:[],filterName:"ALL"},action){
    const index = state.todos
        .indexOf(state.todos.find(todo=>todo.id === action.id));
    switch(action.type) {
        case 'ADD':
            return {
            todos:[...state.todos,{text:action.text,isDone:false,id:id++}],
                filterName:state.filterName
            }
        case 'DELETE':

            state.todos.splice(index,1);
            return {
                todos:[...state.todos],
                filterName:state.filterName
            }
        case 'TOOGLE' :
            state.todos[index].isDone= !state.todos[index].isDone
            return {
                todos:[...state.todos],
                filterName:state.filterName
            }
        case 'TOGGLEFILTER' :
            return {
                todos:[...state.todos],
                filterName:action.name
            }
        case 'CLEARCOMPLETED' :
            console.log(action.type);
            return {todos:clearCompleted(state.todos)}

    }
    return state;
}

export default reducer;