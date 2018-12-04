import { combineReducers } from 'redux';
import counter from './counter';
import itemsData from './items';

export default combineReducers({
  counter,
  itemsData
})
