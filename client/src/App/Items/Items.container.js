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
  return { query: 'q' };
}


export default connect(mapStateToProps, actions)(Items);
