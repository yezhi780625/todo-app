export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const MODIFY_ITEM = "MODIFY_ITEM";
let _id = 0;

export default {
    toggle_item:(id)=>{
        return {
            type:TOGGLE_ITEM,
            id:id
        }
    },
    delete_item:(id)=>{
        return {
            type:DELETE_ITEM,
            id:id
        }
    },
    create_item:()=>{
        return {
            type:CREATE_ITEM,
            id:_id++
        }
    },
    update_item:(id,text)=>{
        return {
            type:UPDATE_ITEM,
            id:id,
            text:text
        }
    },
    modify_item:(text)=>{
        return {
            type:MODIFY_ITEM,
            text:text
        }
    }
}