import React from 'react';
import axios from 'axios';
import Breadcrumbs from '../Breadcrumbs';
import Loading from '../Loading';
import Item from './Item/Item';
import style from './style.css';
import {
  ITEM_DETAIL_LOADING, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_ERROR,
} from '../constants/actions';

class ItemDetailView extends React.Component {
  // added this to make ssr works, needs refactor
  static fetchData(store, location) {
    const id = location.pathname ? location.pathname.split('/').pop() : '';

    store.dispatch({ type: ITEM_DETAIL_LOADING, id });
    return axios.get(`http://localhost:3000/api/items/${id}`)
      .then((response) => {
        store.dispatch({ type: ITEM_DETAIL_SUCCESS, response: response.data });
      })
      .catch((error) => {
        store.dispatch({ type: ITEM_DETAIL_ERROR, error });
      });
  }
  componentWillMount() {
    // added this to avoid reloading the item as soon as the client runs react
    if (process && process.env && process.NODE) return;

    const { item, currentItemId } = this.props;
    if (currentItemId !== item.id || !item.title) this.props.loadItemDetail(currentItemId);
  }

  render() {
    return (
      <Loading loading={this.props.loading}>
        <div>
          <Breadcrumbs />
          <div className={style.container}>
            <Item item={this.props.item} />
          </div>
        </div>
      </Loading>
    );
  }
}

ItemDetailView.propTypes = {
  loadItemDetail: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  item: React.PropTypes.shape({
    id: React.PropTypes.string,
    title: React.PropTypes.string,
  }),
  currentItemId: React.PropTypes.string,
};

ItemDetailView.defaultProps = {
  loading: false,
  item: { id: '' },
  currentItemId: '',
};

export default ItemDetailView;
