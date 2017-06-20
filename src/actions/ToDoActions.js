import fire from '../configs/fire.js';
// export const TOGGLE_ITEM = "TOGGLE_ITEM";
// export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
// export const DELETE_ITEM = "DELETE_ITEM";
export const MODIFY_ITEM = "MODIFY_ITEM";

export const TOGGLE_ITEM_INIT = "TOGGLE_ITEM_INIT";
export const TOGGLE_ITEM_SUCCESS = "TOGGLE_ITEM_SUCCESS";
export const TOGGLE_ITEM_FAIL = "TOGGLE_ITEM_FAIL";
export const CREATE_ITEM_INIT = "CREATE_ITEM_INIT";
export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";
export const CREATE_ITEM_FAIL = "CREATE_ITEM_FAIL";
let _id = 0;



export default {
    toggle_item:(id)=>{
        return (dispatch)=>{
            dispatch({type:TOGGLE_ITEM_INIT});
            let itemRef = fire.database().ref(`/todo/${id}`);
            itemRef.once("value")
            .then(function(snapshot) {
                itemRef.child("completed").set(!snapshot.child("completed").val())
                .then(()=>{dispatch({type:TOGGLE_ITEM_SUCCESS});})
                .catch((error)=>(dispatch({type:TOGGLE_ITEM_FAIL})));
            });
        };
        // return {
        //     type:TOGGLE_ITEM,
        //     id:id
        // };
    },
    // delete_item:(id)=>{
    //     return {
    //         type:DELETE_ITEM,
    //         id:id
    //     };
    // },
    create_item:()=>{
        return (dispatch,getState)=>{
            dispatch({type:CREATE_ITEM_INIT});
            let {todo:{new_item}} = getState();
            let todoRef=fire.database().ref(`todo`);
            todoRef.push({
                text:new_item,
                completed:false,
                archived:false
            }).then((resp)=>{
                dispatch({type:CREATE_ITEM_SUCCESS});
            }).catch((error)=>{
                dispatch({type:CREATE_ITEM_FAIL});
            });
        };
        // return {
        //     type:CREATE_ITEM,
        //     id:_id++
        // };
    },
    update_item:(items)=>{
        return {
            type:UPDATE_ITEM,
            todo:items
        };
    },
    modify_item:(text)=>{
        return {
            type:MODIFY_ITEM,
            text:text
        };
    }
};