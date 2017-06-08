import {
    // FETCH_PROFILE_INIT,
    FETCH_PROFILE_SUCCESS
    // FETCH_PROFILE_FAIL
} from '../actions/ProfileActions';

const ProfileReducer = (state={
    name:"",
    gender:"unknown",
    experiences:[],
    educations:[]
},action)=>{
    switch(action.type){
        case FETCH_PROFILE_SUCCESS:
            return Object.assign({},state,action.profile);
        default:
            return state;
    }
};

export default ProfileReducer;