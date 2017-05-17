import { combineReducers } from 'redux';
import todo from './ToDoReducer';
import app from './AppReducer';

export default combineReducers({
  app,
  todo
});