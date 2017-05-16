import {TOGGLE_DRAWER} from '../actions/AppActions';
function AppReducer(state={
    isOpen:false},action){
    switch(action.type){
        case TOGGLE_DRAWER:
            return Object.assign({},state,{isOpen:action.open});
        default:
            return state;
    }
}

export default AppReducer;