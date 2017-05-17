import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import ToDoActions from '../actions/ToDoActions';

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeInput: (e) => {
            var value = e.target.value;
            dispatch(ToDoActions.modify_item(value));
        },
        toggleItem: (id) => {
            return dispatch(ToDoActions.toggle_item(id));
        },
        createItem: () => {
            return dispatch(ToDoActions.create_item());
        },
        deleteItem: (id) => {
            return dispatch(ToDoActions.delete_item(id));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);