import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import axios from 'axios';

import Items from './Items.jsx';

const ITEM_DETAIL_LOADING = 'ITEM_DETAIL_LOADING';
const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';
const ITEM_DETAIL_ERROR = 'ITEM_DETAIL_ERROR';

const actions = {
  viewItem(id) {
    return (dispatch) => {
      dispatch(push({
        pathname: '/items/' + id,
      }));

      dispatch({ type: ITEM_DETAIL_LOADING });
      axios.get('/api/items/' + id)
        .then(function (response) {
          dispatch({ type: ITEM_DETAIL_SUCCESS, response: response.data });
        })
        .catch(function (error) {
          dispatch({ type: ITEM_DETAIL_ERROR, error });
        });
    }
  }
};

function mapStateToProps(state) {
  const { items, categories } = state.search.result;
  return { items, categories };
}


export default connect(mapStateToProps, actions)(Items);
