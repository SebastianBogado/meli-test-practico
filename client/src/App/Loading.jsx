import React from 'react';

const Loading = props => (props.loading ? <span>Loading...</span> : props.children);


Loading.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
};


Loading.defaultProps = {
  children: <div />,
  loading: false,
};


export default Loading;
