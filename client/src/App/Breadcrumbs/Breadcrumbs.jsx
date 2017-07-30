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
  categories: [
    'Electronica, Audio y video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32 GB'
  ]
};

export default Breadcrumbs;
