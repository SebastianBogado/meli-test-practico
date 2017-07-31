import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Items from './Items';

const actions = {
  viewItem(id) {
    return (dispatch) => {
      dispatch(push({
        pathname: `/items/${id}`,
      }));
    };
  },
};

function mapStateToProps(state) {
  const { items } = state.search.result;
  return { items };
}


export default connect(mapStateToProps, actions)(Items);
