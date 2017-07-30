import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Header from './Header.jsx';

const actions = {
  search() {
    return (dispatch, getState) => {
      dispatch(push({
        pathname: '/items',
      }));
    }
  }
};

function mapStateToProps(state) {
  return { query: 'q' };
}


export default connect(mapStateToProps, actions)(Header);
