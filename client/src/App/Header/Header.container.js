import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from './Header';


const actions = {
  search(search) {
    return (dispatch) => {
      dispatch(push({
        pathname: '/items',
        query: { search },
      }));
    };
  },
};

function makeMapStateToProps(state) {
  const searchInitialValue = state.routing.locationBeforeTransitions ?
    state.routing.locationBeforeTransitions.query.search : '';
  return () => ({ searchInitialValue });
}


export default connect(makeMapStateToProps, actions)(Header);
