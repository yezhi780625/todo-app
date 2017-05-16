export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export default {
    toggle_drawer:(open)=>{
        return {
            type:TOGGLE_DRAWER,
            open:open
        };
    }
}