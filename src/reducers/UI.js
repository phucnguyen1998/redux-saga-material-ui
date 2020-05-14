import * as Types from './../constants/UI'

const InitialState = {
  showLoading: false
}

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case Types.SHOW_LOADING:
      return {...state, showLoading: true}
    case Types.HIDE_LOADING:
      return {...state, showLoading: false}
    default:
      return state
  }
}

export default reducer;