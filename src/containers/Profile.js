import { connect } from 'react-redux';
import {getProfile} from '../actions/ProfileActions';
import Profile from '../components/Profile';

const mapStateToProps = (state,ownProps)=>{
    return Object.assign({},state);
};

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        init:()=>{
            dispatch(getProfile());
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Profile);