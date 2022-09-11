import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];
const INITIAL_STATE = {};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middlewares),
);

export default store;
