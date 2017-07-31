/*import {
  LOGOUT,
  GET_TOKEN, GET_TOKEN_ERROR, GET_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN, GET_USER_FROM_TOKEN_SUCCESS,
} from 'js/constants/Actions';
*/

const SEARCH_LOADING = 'SEARCH_LOADING';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_ERROR = 'SEARCH_ERROR';
const ITEM_DETAIL_LOADING = 'ITEM_DETAIL_LOADING';
const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';
const ITEM_DETAIL_ERROR = 'ITEM_DETAIL_ERROR';

const initialState = [];


function operations(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOADING:
    case ITEM_DETAIL_LOADING:
    case SEARCH_ERROR:
    case ITEM_DETAIL_ERROR:
      return initialState;
    case ITEM_DETAIL_SUCCESS:
    case SEARCH_SUCCESS:
      return [...action.response.categories];
    default:
      return state;
  }
}

export default operations;
