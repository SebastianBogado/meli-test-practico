import React from 'react';
import style from './style.css';


const Breadcrumbs = ({ categories }) => {
  const lastCategory = categories.pop();
  return (
    <div className={style.container}>
      {categories.map( cat => (
        <span key={cat}>{cat + ' > '}</span>
      ))}
      <span key={lastCategory}><b>{lastCategory}</b></span>
    </div>
  )
};

Breadcrumbs.defaultProps = {
  categories: []
};

export default Breadcrumbs;
