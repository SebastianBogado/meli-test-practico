import { connect } from 'react-redux';
import axios from 'axios';
import {
  SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_ERROR,
} from '../constants/actions';

import SearchResultsView from './SearchResultsView';


const actions = {
  search(query) {
    return (dispatch) => {
      dispatch({ type: SEARCH_LOADING, query });
      axios.get('/api/items', {
        params: { q: query },
      })
        .then((response) => {
          dispatch({ type: SEARCH_SUCCESS, response: response.data });
        })
        .catch((error) => {
          dispatch({ type: SEARCH_ERROR, error });
        });
    };
  },
};

function mapStateToProps(state) {
  const { loading } = state.search;
  const currentSearchQuery = state.search.query;
  const { items } = state.search.result;
  const query = state.routing.locationBeforeTransitions ?
    state.routing.locationBeforeTransitions.query.search : '';

  return { items, loading, query, currentSearchQuery };
}


export default connect(mapStateToProps, actions)(SearchResultsView);
