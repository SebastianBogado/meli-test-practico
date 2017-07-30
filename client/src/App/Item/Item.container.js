import { connect } from 'react-redux';

import Item from './Item.jsx';


function mapStateToProps(state) {
  return { item: state.itemDetail.item };
}


export default connect(mapStateToProps, null)(Item);
