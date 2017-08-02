import { connect } from 'react-redux';
import axios from 'axios';
import {
  ITEM_DETAIL_LOADING, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_ERROR,
} from '../constants/actions';

import ItemDetailView from './ItemDetailView';


const actions = {
  loadItemDetail(id) {
    return (dispatch) => {
      dispatch({ type: ITEM_DETAIL_LOADING, id });
      axios.get(`/api/items/${id}`)
        .then((response) => {
          dispatch({ type: ITEM_DETAIL_SUCCESS, response: response.data });
        })
        .catch((error) => {
          dispatch({ type: ITEM_DETAIL_ERROR, error });
        });
    };
  },
};

function mapStateToProps(state, ownProps) {
  const { loading, item } = state.itemDetail;
  return {
    currentItemId: ownProps.params.id,
    item,
    loading,
  };
}


export default connect(mapStateToProps, actions)(ItemDetailView);
