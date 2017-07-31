import { connect } from 'react-redux';

import App from './App.jsx';


function mapStateToProps(state) {
  return { loading: state.search.loading || state.itemDetail.loading };
}


export default connect(mapStateToProps, null)(App);
