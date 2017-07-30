import React from 'react';
import style from './style.css';


const Breadcrumbs = (props) => (
  <div className={style.container}>
    {props.categories.map( cat => (
      <span>{cat + ' > '}</span>
    ))}
  </div>
);

Breadcrumbs.defaultProps = {
  categories: []
};

export default Breadcrumbs;
