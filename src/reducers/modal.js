import * as types from './../constants/modal'

const InitialState = {
  showModal: false,
  component: null,
  title: ''
}
const reducer = (state = InitialState, action) => {
    switch (action.type) {
      case types.SHOW_MODAL: 
        return {...state, showModal: true};
      case types.HIDE_MODAL: 
        return {...state, showModal: false};
      case types.CHANGE_MODAL_TITLE:
        const {title} = action.payload;
        return {...state, title: title};
      case types.CHANGE_MODAL_CONTENT:
        const { component } = action.payload;
        return {...state, component: component};
      default:
        return state
    }
}

export default reducer;