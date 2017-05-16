import {
    TOGGLE_ITEM
    , CREATE_ITEM
    , UPDATE_ITEM
    , DELETE_ITEM
    , MODIFY_ITEM
} from '../actions/ToDoActions';
function ToDoReducer(state = {
    items: [],
    new_item: ""
}, action) {
    switch(action.type){
        case MODIFY_ITEM:
            return Object.assign({},state,{new_item:action.text});
        case TOGGLE_ITEM:
        case CREATE_ITEM:
        case UPDATE_ITEM:
        case DELETE_ITEM:
        default:
            return state;

    }
}
export default ToDoReducer;