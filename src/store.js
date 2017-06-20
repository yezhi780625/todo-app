import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
import logger from 'redux-logger';
import 'babel-polyfill';

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      // logger
    )
  );
}