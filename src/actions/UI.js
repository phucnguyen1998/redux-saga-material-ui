import * as uiTypes from './../constants/UI';

export const showLoading = () => {
  return {
    type: uiTypes.SHOW_LOADING
  }
}

export const hideLoading = () => {
  return {
    type: uiTypes.HIDE_LOADING
  }
}