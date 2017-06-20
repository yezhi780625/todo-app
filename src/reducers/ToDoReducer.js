import { UPDATE_ITEM,MODIFY_ITEM,CREATE_ITEM_SUCCESS} from '../actions/ToDoActions';
import {Map} from 'immutable';

function ToDoReducer(state = {
    items: [],
    new_item: ""
}, action) {
    var oldState = Map(state);
    var newState;
    switch (action.type) {
        case UPDATE_ITEM:
            newState = oldState.set("items",action.todo);
            return newState.toJS();
        case MODIFY_ITEM:
            return Object.assign({}, state, { new_item: action.text });
        case CREATE_ITEM_SUCCESS:
        console.log(action.type);
            newState = oldState.set("new_item","");
            return newState.toJS();
        // case TOGGLE_ITEM:
        //     items = state.items.map(t =>
        //         t.id === action.id ? Object.assign({}, t, { completed: !t.completed }) : t
        //     );
        //     return Object.assign({}, state, { items: items });
        // case CREATE_ITEM:
        //     if (state.new_item.trim() !== "") {
        //         items.push({
        //             id: action.id,
        //             text: state.new_item,
        //             completed: false,
        //             archived: false
        //         });
        //         state.new_item = "";
        //         return Object.assign({}, state, { items: items });
        //     }
        //     return state;
        // case UPDATE_ITEM:
        // case DELETE_ITEM:
        //     items = state.items.map(t =>
        //         t.id === action.id ? Object.assign({}, t, { archived: !t.archived }) : t
        //     );
        //     return Object.assign({}, state, { items: items });
        default:
            return state;

    }
}
export default ToDoReducer;