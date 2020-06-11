import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './UI';
import modalReducer from './modal';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  form: formReducer
});

export default rootReducer;