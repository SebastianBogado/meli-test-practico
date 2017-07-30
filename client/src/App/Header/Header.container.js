import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import axios from 'axios';

import Header from './Header.jsx';

const SEARCH_LOADING = 'SEARCH_LOADING';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_ERROR = 'SEARCH_ERROR';

const actions = {
  search(search) {
    return (dispatch) => {
      dispatch(push({
        pathname: '/items',
        query: { search },
      }));

      dispatch({ type: SEARCH_LOADING });
      axios.get('/api/items', {
        params: { q: search }
      })
        .then(function (response) {
          dispatch({ type: SEARCH_SUCCESS, response: response.data });
        })
        .catch(function (error) {
          dispatch({ type: SEARCH_ERROR, error });
        });
    }
  }
};

function makeMapStateToProps(state) {
  const searchInitialValue = state.routing.locationBeforeTransitions.query.search;
  return () => ({ searchInitialValue });
}


export default connect(makeMapStateToProps, actions)(Header);
