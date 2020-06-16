import axiosService from './../commons/axiosServices';
import { API_ENDPOINT } from './../constants';
import qs from 'query-string';

//  http://localhost:3000/tasks
const url = 'tasks';

export const getList = (params = {}) => {
  let queryParams = '';
  if(Object.keys(params).length > 0){
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}

export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}