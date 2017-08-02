import React from 'react';
import axios from 'axios';
import Breadcrumbs from '../Breadcrumbs';
import Loading from '../Loading';
import Items from './Items/Items';
import style from './style.css';
import {
  SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_ERROR,
} from '../constants/actions';


class SearchResultsView extends React.Component {
  // added this to make ssr works, needs refactor
  static fetchData(store, location) {
    const query = location.query ? location.query.search : '';

    store.dispatch({ type: SEARCH_LOADING, query });
    return axios.get('http://localhost:3000/api/items', {
      params: { q: query },
    })
      .then((response) => {
        store.dispatch({ type: SEARCH_SUCCESS, response: response.data });
      })
      .catch((error) => {
        store.dispatch({ type: SEARCH_ERROR, error });
      });
  }

  componentWillMount() {
    // added this to avoid triggering the search twice
    if (process && process.env && process.NODE) return;

    const { query, currentSearchQuery } = this.props;
    if (query && query !== currentSearchQuery) this.props.search(query);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) this.props.search(nextProps.query);
  }

  render() {
    return (
      <Loading loading={this.props.loading}>
        <div>
          <Breadcrumbs />
          <div className={style.container}>
            <Items items={this.props.items} />
          </div>
        </div>
      </Loading>
    );
  }
}

SearchResultsView.propTypes = {
  search: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  query: React.PropTypes.string,
  currentSearchQuery: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.object),
};

SearchResultsView.defaultProps = {
  loading: false,
  query: '',
  items: [],
  currentSearchQuery: '',
};

export default SearchResultsView;
