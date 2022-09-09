import {combineReducers} from 'redux';

const tempReducer = () => {
  return {
    name: 'John',
    age: 30,
  };
};

export default combineReducers({
  temp: tempReducer,
});
