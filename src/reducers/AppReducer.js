import {TOGGLE_DRAWER
    // ,TOGGLE_ITEM
    // ,CREATE_ITEM
    // ,UPDATE_ITEM
    // ,DELETE_ITEM
    // ,MODIFY_ITEM
} from '../actions/AppActions';
function AppReducer(state={
    isOpen:false,
    items:[],
    new_item:''},action){
    switch(action.type){
        case TOGGLE_DRAWER:
            return Object.assign({},state,{isOpen:action.open});
        default:
            return state;
    }
}

export default AppReducer;