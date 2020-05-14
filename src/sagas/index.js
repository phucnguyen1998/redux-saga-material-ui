import { fork,take,call } from 'redux-saga/effects';
import * as taskType from './../constants/task';
import { getList } from './../apis/task';

function* watchFetchListTaskAction() {
  yield take(taskType.FETCH_TASK);
  console.log('watching fetch task action');
  
  let res = yield call(getList);
  console.log('response', res);  
}

function* watchCreateTaskAction() {
  console.log('watching create task action');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  
}

export default rootSaga;