import { connect } from 'react-redux';

import Breadcrumbs from './Breadcrumbs';


function mapStateToProps({ breadcrumbs }) {
  return { categories: breadcrumbs };
}


export default connect(mapStateToProps, null)(Breadcrumbs);
