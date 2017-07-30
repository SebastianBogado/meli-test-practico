/*import {
  LOGOUT,
  GET_TOKEN, GET_TOKEN_ERROR, GET_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN, GET_USER_FROM_TOKEN_SUCCESS,
} from 'js/constants/Actions';
*/

const ITEM_DETAIL_LOADING = 'ITEM_DETAIL_LOADING';
const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';
const ITEM_DETAIL_ERROR = 'ITEM_DETAIL_ERROR';

const initialState = {
  loading: false,
  item:  { price: {} },
};


function operations(state = initialState, action) {
  switch (action.type) {
    case ITEM_DETAIL_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.response.item,
      };
    case ITEM_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: 'gg'
      };
    default:
      return state;
  }
}

export default operations;
