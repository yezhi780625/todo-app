import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import AppReducer from './reducers/AppReducer'

export default function configureStore(preloadedState) {
  return createStore(
    AppReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}