import React from 'react';
import Header from './Header';
import style from './style.css';


const App = props => (
  <div>
    <Header />
    <div className={style.container}>
      { props.children }
    </div>
  </div>
);


App.propTypes = {
  children: React.PropTypes.node,
};


App.defaultProps = {
  children: <div />,
};


export default App;
