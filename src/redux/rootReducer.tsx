import {combineReducers} from 'redux';
import movieReducer from './reducers';

const rootReducers = combineReducers<any>({
  movies: movieReducer,
});

export default rootReducers;
