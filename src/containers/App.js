import { connect } from 'react-redux';
import AppActions from '../actions/AppActions';
import App from '../components/App';

const mapStateToProps = (state,ownProps)=>{
    return Object.assign({},state);
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        toggleDrawer:(open)=>{
            console.log(open);
            dispatch(AppActions.toggle_drawer(open));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);