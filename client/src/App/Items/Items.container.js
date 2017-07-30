import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Items from './Items.jsx';

const actions = {
  viewItem() {
    return (dispatch, getState) => {
      dispatch(push({
        pathname: '/items/1',
      }));
    }
  }
};

function mapStateToProps(state) {
  const { items, categories } = state.search.result;
  return { items, categories };
}


export default connect(mapStateToProps, actions)(Items);
