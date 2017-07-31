import {
  SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_ERROR,
  ITEM_DETAIL_LOADING, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_ERROR,
} from '../constants/actions';


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
