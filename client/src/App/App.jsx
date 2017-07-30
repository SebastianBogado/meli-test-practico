import React from 'react';
import Header from './Header';
import style from './style.css';


const App = (props) => (
  <div>
    <Header />
    <div className={style.container}>
      { props.children }
    </div>
  </div>
);

export default App;
