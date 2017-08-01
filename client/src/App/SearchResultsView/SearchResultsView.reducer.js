import {
  SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_ERROR,
} from '../constants/actions';


const initialState = {
  loading: false,
  error: '',
  query: '',
  result: {
    categories: [],
    items: [],
  },
};


function operations(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...initialState,
        loading: true,
        query: action.query,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        result: {
          categories: action.response.categories,
          items: action.response.items,
        },
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: 'gg',
      };
    default:
      return state;
  }
}

export default operations;
