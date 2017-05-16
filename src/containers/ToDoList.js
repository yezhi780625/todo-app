import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import ToDoActions from '../actions/ToDoActions';

const mapStateToProps=(state,ownProps)=>{
    return state;
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onChangeInput:(e)=>{
            var value = e.target.value;
            dispatch(ToDoActions.modify_item(value));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);