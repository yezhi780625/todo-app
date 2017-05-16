import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'


export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}