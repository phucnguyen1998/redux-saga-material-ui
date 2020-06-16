import { fork,take,call,put,delay,takeLatest,takeEvery } from 'redux-saga/effects';
import * as taskType from './../constants/task';
import { getList,addTask } from './../apis/task';
import { STATUS_CODE, STATUSES } from './../constants/index';
import { fetchListTask,fetchListTaskSuccess, fetchListTaskFailed, addTaskSuccess, addTaskFailed } from '../actions/task';
import {showLoading,hideLoading} from './../actions/UI';
import {hideModal} from './../actions/modal';

/**
 * B1: lang nghe FETCH_TASK
 * B2: goi api
 *  B2.1: Hien thi loading
 * B3: Kiem tra status code 
 *  Neu thanh cong thi dispatch action fetchListTaskSuccess
 *  Neu that bai thi dispatch action fetchListTaskFailed
 * B4: tat loading
 * B5: Thuc hien cong viec tiep theo
 */

function* watchFetchListTaskAction() {
  while(true){
    const action = yield take(taskType.FETCH_TASK);
    yield put(showLoading());
    //console.log('action', action);
    const { params } = action.payload; 
    //console.log('action', params);
    
    let res = yield call(getList,params);
    const {status, data} = res;
    if(status === STATUS_CODE.SUCSESS){
      // dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data))
    }else{
      // dispatch action fetchListTaskFailed
      yield put(fetchListTaskFailed(data))
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

//payload nhan duoc ben action
function* filterTaskSaga({payload}) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({
    q:keyword
  }))
  
}

// Add task
function* addTaskSaga({ payload }){
  const { title, description } = payload;
  yield put(showLoading());
  const res = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value
  });
  const { data, status } = res;
  if(status === STATUS_CODE.CREATED){
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  }else{
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskType.FILTER_TASK, filterTaskSaga)
  yield takeEvery(taskType.ADD_TASK, addTaskSaga)
}

export default rootSaga;