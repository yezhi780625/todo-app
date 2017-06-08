import { combineReducers } from 'redux';
import todo from './ToDoReducer';
import app from './AppReducer';
import profile from './ProfileReducer';

export default combineReducers({
  app,
  todo,
  profile
});