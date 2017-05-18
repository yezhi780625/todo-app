import { TOGGLE_ITEM, CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, MODIFY_ITEM } from '../actions/ToDoActions';
function ToDoReducer(state = {
    items: [],
    new_item: ""
}, action) {
    let items = state.items;
    switch (action.type) {
        case MODIFY_ITEM:
            return Object.assign({}, state, { new_item: action.text });
        case TOGGLE_ITEM:
            items = state.items.map(t =>
                t.id === action.id ? Object.assign({}, t, { completed: !t.completed }) : t
            );
            return Object.assign({}, state, { items: items });
        case CREATE_ITEM:
            if (state.new_item.trim() !== "") {
                items.push({
                    id: action.id,
                    text: state.new_item,
                    completed: false,
                    archived: false
                });
                state.new_item = "";
                return Object.assign({}, state, { items: items });
            }
            return state;
        case UPDATE_ITEM:
        case DELETE_ITEM:
            items = state.items.map(t =>
                t.id === action.id ? Object.assign({}, t, { archived: !t.archived }) : t
            );
            return Object.assign({}, state, { items: items });
        default:
            return state;

    }
}
export default ToDoReducer;