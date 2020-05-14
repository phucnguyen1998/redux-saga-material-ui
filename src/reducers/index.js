import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './UI';

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer
});

export default rootReducer;