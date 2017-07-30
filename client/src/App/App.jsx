import React from 'react';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs.jsx';
import style from './style.css';


const App = (props) => (
  <div>
    <Header />
    <div className={style.container}>
      <Breadcrumbs />
      { props.children }
    </div>
  </div>
);

export default App;
