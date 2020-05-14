import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  }
}

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error
    }
  }
}

/**
 * B1: goi fetchListTaskRequest();
 * B2: reset state tasks => [];
 * B3: fetchListTaskSuccess(data response)
 * B4: fetchListTaskFailed(data error)
 */

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask()); // B2 
//     taskApis.getList().then((res) => {
//       dispatch(fetchListTaskSuccess(res.data));
//     }).catch((err) => {
//       dispatch(fetchListTaskSuccess(err))
//     })
//   }
// }

