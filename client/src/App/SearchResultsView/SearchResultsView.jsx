import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Items from './Items/Items';
import style from './style.css';


class SearchResultsView extends React.Component {
  componentWillMount() {
    const { query, currentQuery } = this.props;
    if (currentQuery !== query) this.props.search(query);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) this.props.search(nextProps.query);
  }

  render() {
    return (
      <div>
        <Breadcrumbs />
        <div className={style.container}>
          <Items items={this.props.items} />
        </div>
      </div>
    );
  }
}

SearchResultsView.propTypes = {
  search: React.PropTypes.func.isRequired,
  query: React.PropTypes.string,
  currentQuery: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.object),
};

SearchResultsView.defaultProps = {
  items: [],
  query: '',
  currentQuery: '',
};

export default SearchResultsView;
