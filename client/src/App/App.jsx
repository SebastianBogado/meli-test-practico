import React from 'react';
import Header from './Header';
import style from './style.css';


const App = (props) => (
  <div>
    <Header />
    <div className={style.container}>
      { props.loading ? 'Loading...' : props.children }
    </div>
  </div>
);


App.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
};


App.defaultProps = {
  loading: false
};


export default App;
