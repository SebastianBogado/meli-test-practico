/*import {
  LOGOUT,
  GET_TOKEN, GET_TOKEN_ERROR, GET_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN, GET_USER_FROM_TOKEN_SUCCESS,
} from 'js/constants/Actions';
*/

const SEARCH_LOADING = 'SEARCH_LOADING';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_ERROR = 'SEARCH_ERROR';

const initialState = {
  loading: false,
  error: '',
  result: {
    categories: [],
    items: []
  }
};


function operations(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        result: {
          categories: action.response.categories,
          items: action.response.items,
        }
      };
    case SEARCH_ERROR:
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
