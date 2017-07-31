import {
  ITEM_DETAIL_LOADING, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_ERROR
} from '../constants/actions';


const initialState = {
  loading: false,
  item:  {},
};


function operations(state = initialState, action) {
  switch (action.type) {
    case ITEM_DETAIL_LOADING:
      return {
        item: { id: action.id },
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
